/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ENCRYPTED */
/**
 * @summary ENCRYPTED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCRYPTED{ToBeEnciphered}  ::=
 *     OCTET STRING
 *         (CONSTRAINED BY {
 *         -- must be the result of applying an encipherment procedure to the contents octets component
 *         -- of a definite-length BER-encoding of a value of --ToBeEnciphered})
 * ```
 */
export type ENCRYPTED<ToBeEnciphered> = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ENCRYPTED */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_ENCRYPTED */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(
    _decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>
) {
    return $._decodeOctetString;
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_ENCRYPTED */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_ENCRYPTED */
/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(
    _encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>
) {
    return $._encodeOctetString;
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_ENCRYPTED */

/* eslint-enable */
