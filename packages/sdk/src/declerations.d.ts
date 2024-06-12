import CryptoJS from 'crypto-js';

declare module 'crypto-js/sha256' {
  export default CryptoJS.SHA256;
}
declare module 'crypto-js/enc-base64url' {
  export default CryptoJS.enc.Base64url;
}
