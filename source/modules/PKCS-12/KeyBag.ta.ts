/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivateKeyInfo,
    _decode_PrivateKeyInfo,
    _encode_PrivateKeyInfo,
} from "../AsymmetricKeyPackageModuleV1/PrivateKeyInfo.ta";

/* START_OF_SYMBOL_DEFINITION KeyBag */
/**
 * @summary KeyBag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyBag  ::=  PrivateKeyInfo
 * ```
 */
export type KeyBag = PrivateKeyInfo; // DefinedType
/* END_OF_SYMBOL_DEFINITION KeyBag */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyBag */
let _cached_decoder_for_KeyBag: $.ASN1Decoder<KeyBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyBag */

/* START_OF_SYMBOL_DEFINITION _decode_KeyBag */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyBag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyBag} The decoded data structure.
 */
export function _decode_KeyBag(el: _Element) {
    if (!_cached_decoder_for_KeyBag) {
        _cached_decoder_for_KeyBag = _decode_PrivateKeyInfo;
    }
    return _cached_decoder_for_KeyBag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyBag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyBag */
let _cached_encoder_for_KeyBag: $.ASN1Encoder<KeyBag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyBag */

/* START_OF_SYMBOL_DEFINITION _encode_KeyBag */
/**
 * @summary Encodes a(n) KeyBag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyBag, encoded as an ASN.1 Element.
 */
export function _encode_KeyBag(value: KeyBag, elGetter: $.ASN1Encoder<KeyBag>) {
    if (!_cached_encoder_for_KeyBag) {
        _cached_encoder_for_KeyBag = _encode_PrivateKeyInfo;
    }
    return _cached_encoder_for_KeyBag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyBag */

/* eslint-enable */
