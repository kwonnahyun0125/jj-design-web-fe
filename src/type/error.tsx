export enum ERROR_CODE {
  NOTFOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}

export enum ERROR_MESSAGES {
  NOTFOUND = "페이지를 찾을 수 없습니다.",
  UNAUTHORIZED = "이 페이지를 볼 수 있는 권한이 없습니다.",
  FORBIDDEN = "접근이 거부되었습니다.",
}

export enum ERROR_DESCRIPTION {
  NOTFOUND = "요청한 페이지가 서버에 존재하지 않습니다.",
  UNAUTHORIZED = "이 페이지를 볼 수 있는 권한이 없습니다.",
  FORBIDDEN = "접근이 거부되었습니다.",
}
