/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
import {
    PublicKeyType,
    _decode_PublicKeyType,
    _encode_PublicKeyType,
} from "../PKCS-15/PublicKeyType.ta";
export {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
export {
    PublicKeyType,
    _decode_PublicKeyType,
    _encode_PublicKeyType,
} from "../PKCS-15/PublicKeyType.ta";

/* START_OF_SYMBOL_DEFINITION PublicKeys */
/**
 * @summary PublicKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeys    ::=  PathOrObjects {PublicKeyType}
 * ```
 */
export type PublicKeys = PathOrObjects<PublicKeyType>; // DefinedType
/* END_OF_SYMBOL_DEFINITION PublicKeys */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeys */
let _cached_decoder_for_PublicKeys: $.ASN1Decoder<PublicKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PublicKeys */

/* START_OF_SYMBOL_DEFINITION _decode_PublicKeys */
/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeys} The decoded data structure.
 */
export function _decode_PublicKeys(el: _Element) {
    if (!_cached_decoder_for_PublicKeys) {
        _cached_decoder_for_PublicKeys = _get_decoder_for_PathOrObjects<PublicKeyType>(
            _decode_PublicKeyType
        );
    }
    return _cached_decoder_for_PublicKeys(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PublicKeys */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeys */
let _cached_encoder_for_PublicKeys: $.ASN1Encoder<PublicKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PublicKeys */

/* START_OF_SYMBOL_DEFINITION _encode_PublicKeys */
/**
 * @summary Encodes a(n) PublicKeys into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeys, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeys(
    value: PublicKeys,
    elGetter: $.ASN1Encoder<PublicKeys>
) {
    if (!_cached_encoder_for_PublicKeys) {
        _cached_encoder_for_PublicKeys = _get_encoder_for_PathOrObjects<PublicKeyType>(
            _encode_PublicKeyType
        );
    }
    return _cached_encoder_for_PublicKeys(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PublicKeys */

/* eslint-enable */
