/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
import { sdsiCertificate } from "../PKCS-12/sdsiCertificate.oa";
import { x509Certificate } from "../PKCS-12/x509Certificate.oa";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca";
export { sdsiCertificate } from "../PKCS-12/sdsiCertificate.oa";
export { x509Certificate } from "../PKCS-12/x509Certificate.oa";

/* START_OF_SYMBOL_DEFINITION CertTypes */
/**
 * @summary CertTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertTypes BAG-TYPE ::= {
 *     x509Certificate |
 *     sdsiCertificate,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {BAG_TYPE[]}
 *
 */
export const CertTypes: BAG_TYPE<any>[] = [x509Certificate, sdsiCertificate];
/* END_OF_SYMBOL_DEFINITION CertTypes */

/* eslint-enable */
