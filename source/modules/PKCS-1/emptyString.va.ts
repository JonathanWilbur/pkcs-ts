/* eslint-disable */
import { EncodingParameters } from "../PKCS-1/EncodingParameters.ta";
export {
    EncodingParameters,
    _decode_EncodingParameters,
    _encode_EncodingParameters,
} from "../PKCS-1/EncodingParameters.ta";

/* START_OF_SYMBOL_DEFINITION emptyString */
/**
 * @summary emptyString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyString    EncodingParameters ::= ''H
 * ```
 *
 * @constant
 */
export const emptyString: EncodingParameters = new Uint8Array(0);
/* END_OF_SYMBOL_DEFINITION emptyString */

/* eslint-enable */
