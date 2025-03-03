import { http } from "@/utils/http";
import { Verify } from "@/api/interface/verify";
import { baseUrlApi } from "@/api/modules/utils";
// 获取验证码
export const getVerifyGenerate = () => {
  return http.request<Verify>("get", baseUrlApi("/v1/verify/generate"));
};
