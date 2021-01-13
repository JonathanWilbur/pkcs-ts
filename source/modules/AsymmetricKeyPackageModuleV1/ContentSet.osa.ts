/* eslint-disable */
import { ct_asymmetric_key_package } from "../AsymmetricKeyPackageModuleV1/ct-asymmetric-key-package.oa";
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca";
export { ct_asymmetric_key_package } from "../AsymmetricKeyPackageModuleV1/ct-asymmetric-key-package.oa";
export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca";

/* START_OF_SYMBOL_DEFINITION ContentSet */
/**
 * @summary ContentSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentSet CONTENT-TYPE ::= {
 * ct-asymmetric-key-package,
 * ... -- Expect additional content types --
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentSet: CONTENT_TYPE<any>[] = [ct_asymmetric_key_package];
/* END_OF_SYMBOL_DEFINITION ContentSet */

/* eslint-enable */
