/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateChoices,
    _decode_CertificateChoices,
    _encode_CertificateChoices,
} from "../CryptographicMessageSyntax/CertificateChoices.ta";
export {
    CertificateChoices,
    _decode_CertificateChoices,
    _encode_CertificateChoices,
} from "../CryptographicMessageSyntax/CertificateChoices.ta";

/* START_OF_SYMBOL_DEFINITION CertificateSet */
/**
 * @summary CertificateSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSet  ::=  SET OF CertificateChoices
 * ```
 */
export type CertificateSet = CertificateChoices[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION CertificateSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSet */
let _cached_decoder_for_CertificateSet: $.ASN1Decoder<CertificateSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSet */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateSet */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSet} The decoded data structure.
 */
export function _decode_CertificateSet(el: _Element) {
    if (!_cached_decoder_for_CertificateSet) {
        _cached_decoder_for_CertificateSet = $._decodeSetOf<CertificateChoices>(
            () => _decode_CertificateChoices
        );
    }
    return _cached_decoder_for_CertificateSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSet */
let _cached_encoder_for_CertificateSet: $.ASN1Encoder<CertificateSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSet */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateSet */
/**
 * @summary Encodes a(n) CertificateSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSet, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSet(
    value: CertificateSet,
    elGetter: $.ASN1Encoder<CertificateSet>
) {
    if (!_cached_encoder_for_CertificateSet) {
        _cached_encoder_for_CertificateSet = $._encodeSetOf<CertificateChoices>(
            () => _encode_CertificateChoices,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateSet */

/* eslint-enable */
