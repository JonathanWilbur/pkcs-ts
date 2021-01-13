/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
import {
    SecretKeyType,
    _decode_SecretKeyType,
    _encode_SecretKeyType,
} from "../PKCS-15/SecretKeyType.ta";
export {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
export {
    SecretKeyType,
    _decode_SecretKeyType,
    _encode_SecretKeyType,
} from "../PKCS-15/SecretKeyType.ta";

/* START_OF_SYMBOL_DEFINITION SecretKeys */
/**
 * @summary SecretKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecretKeys    ::=  PathOrObjects {SecretKeyType}
 * ```
 */
export type SecretKeys = PathOrObjects<SecretKeyType>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecretKeys */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretKeys */
let _cached_decoder_for_SecretKeys: $.ASN1Decoder<SecretKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecretKeys */

/* START_OF_SYMBOL_DEFINITION _decode_SecretKeys */
/**
 * @summary Decodes an ASN.1 element into a(n) SecretKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecretKeys} The decoded data structure.
 */
export function _decode_SecretKeys(el: _Element) {
    if (!_cached_decoder_for_SecretKeys) {
        _cached_decoder_for_SecretKeys = _get_decoder_for_PathOrObjects<SecretKeyType>(
            _decode_SecretKeyType
        );
    }
    return _cached_decoder_for_SecretKeys(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecretKeys */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretKeys */
let _cached_encoder_for_SecretKeys: $.ASN1Encoder<SecretKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecretKeys */

/* START_OF_SYMBOL_DEFINITION _encode_SecretKeys */
/**
 * @summary Encodes a(n) SecretKeys into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecretKeys, encoded as an ASN.1 Element.
 */
export function _encode_SecretKeys(
    value: SecretKeys,
    elGetter: $.ASN1Encoder<SecretKeys>
) {
    if (!_cached_encoder_for_SecretKeys) {
        _cached_encoder_for_SecretKeys = _get_encoder_for_PathOrObjects<SecretKeyType>(
            _encode_SecretKeyType
        );
    }
    return _cached_encoder_for_SecretKeys(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecretKeys */

/* eslint-enable */
