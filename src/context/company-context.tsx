"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getCompanyInfo } from "@/api/company/api";
import { companyDataType } from "@/type/company";
import { defaultCompany } from "@/api/company/data";

interface CompanyContextType {
  companyData: companyDataType;
  loading: boolean;
  error: string | null;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyProvider: React.FC<CompanyProviderProps> = ({
  children,
}) => {
  const [companyData, setCompanyData] =
    useState<companyDataType>(defaultCompany);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // 클라이언트 마운트 확인
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // 마운트된 후에만 API 호출
    if (!mounted) return;

    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const result = await getCompanyInfo();
        const data = result.data;

        // 데이터 유효성 검사
        if (data && typeof data === "object") {
          setCompanyData(data);
        } else {
          setCompanyData(defaultCompany);
        }
      } catch (err) {
        console.error("API 호출 에러:", err);
        setError("회사 정보를 불러오는데 실패했습니다.");
        setCompanyData(defaultCompany); // 에러 시에도 기본값 설정
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [mounted]);

  // 마운트되지 않았으면 기본값 반환
  if (!mounted) {
    return (
      <CompanyContext.Provider
        value={{
          companyData: defaultCompany,
          loading: true,
          error: null,
        }}
      >
        {children}
      </CompanyContext.Provider>
    );
  }

  return (
    <CompanyContext.Provider value={{ companyData, loading, error }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error("useCompany는 CompanyProvider 내에서 사용되어야 합니다");
  }
  return context;
};
