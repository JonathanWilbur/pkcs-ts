/* eslint-disable */
import type { ATTRIBUTE } from "x500-ts/dist/node/modules/InformationFramework/ATTRIBUTE.oca";
import { encryptedPrivateKeyInfo } from "../PKCS-9/encryptedPrivateKeyInfo.oa";
import { pKCS15Token } from "../PKCS-9/pKCS15Token.oa";
import { pKCS7PDU } from "../PKCS-9/pKCS7PDU.oa";
import { userPKCS12 } from "../PKCS-9/userPKCS12.oa";

/* START_OF_SYMBOL_DEFINITION PKCSEntityAttributeSet */
/**
 * @summary PKCSEntityAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCSEntityAttributeSet ATTRIBUTE ::= {
 *         pKCS7PDU |
 *         userPKCS12 |
 *         pKCS15Token |
 *         encryptedPrivateKeyInfo,
 *         ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PKCSEntityAttributeSet: ATTRIBUTE[] = [
    pKCS7PDU,
    userPKCS12,
    pKCS15Token,
    encryptedPrivateKeyInfo,
];
/* END_OF_SYMBOL_DEFINITION PKCSEntityAttributeSet */

/* eslint-enable */
