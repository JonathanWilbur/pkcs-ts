/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateChoice,
    _decode_CertificateChoice,
    _encode_CertificateChoice,
} from "../PKCS7/CertificateChoice.ta";
export {
    CertificateChoice,
    _decode_CertificateChoice,
    _encode_CertificateChoice,
} from "../PKCS7/CertificateChoice.ta";

/* START_OF_SYMBOL_DEFINITION CertificateSet */
/**
 * @summary CertificateSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSet  ::=  SET OF CertificateChoice
 * ```
 */
export type CertificateSet = CertificateChoice[]; // SetOfType
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
        _cached_decoder_for_CertificateSet = $._decodeSetOf<CertificateChoice>(
            () => _decode_CertificateChoice
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
        _cached_encoder_for_CertificateSet = $._encodeSetOf<CertificateChoice>(
            () => _encode_CertificateChoice,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateSet */

/* eslint-enable */
