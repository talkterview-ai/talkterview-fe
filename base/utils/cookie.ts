import { getServerToken, setServerToken, removeServerToken } from "./server-cookie";
import { getClientToken, setClientToken, removeClientToken } from "./client-cookie";

// 통합 함수 (환경 감지)
export const getToken = async () => {
  const isServer = typeof window === 'undefined';
  
  if (isServer) {
    try {
      return await getServerToken();
    } catch {
      return null; // 빌드 시 쿠키 접근 불가
    }
  } else {
    return getClientToken();
  }
};

export const setToken = async (token: string) => {
  const isServer = typeof window === 'undefined';
  
  if (isServer) {
    try {
      await setServerToken(token);
    } catch {
      // 서버에서 쿠키 설정 실패 시 무시
    }
  } else {
    setClientToken(token);
  }
};

export const removeToken = async () => {
  const isServer = typeof window === 'undefined';
  
  if (isServer) {
    try {
      await removeServerToken();
    } catch {
      // 서버에서 쿠키 삭제 실패 시 무시
    }
  } else {
    removeClientToken();
  }
};
