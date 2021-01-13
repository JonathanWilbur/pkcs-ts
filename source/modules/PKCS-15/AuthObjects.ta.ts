/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AuthenticationType,
    _decode_AuthenticationType,
    _encode_AuthenticationType,
} from "../PKCS-15/AuthenticationType.ta";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
export {
    AuthenticationType,
    _decode_AuthenticationType,
    _encode_AuthenticationType,
} from "../PKCS-15/AuthenticationType.ta";
export {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";

/* START_OF_SYMBOL_DEFINITION AuthObjects */
/**
 * @summary AuthObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthObjects   ::=  PathOrObjects {AuthenticationType}
 * ```
 */
export type AuthObjects = PathOrObjects<AuthenticationType>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AuthObjects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthObjects */
let _cached_decoder_for_AuthObjects: $.ASN1Decoder<AuthObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthObjects */

/* START_OF_SYMBOL_DEFINITION _decode_AuthObjects */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthObjects} The decoded data structure.
 */
export function _decode_AuthObjects(el: _Element) {
    if (!_cached_decoder_for_AuthObjects) {
        _cached_decoder_for_AuthObjects = _get_decoder_for_PathOrObjects<AuthenticationType>(
            _decode_AuthenticationType
        );
    }
    return _cached_decoder_for_AuthObjects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthObjects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthObjects */
let _cached_encoder_for_AuthObjects: $.ASN1Encoder<AuthObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthObjects */

/* START_OF_SYMBOL_DEFINITION _encode_AuthObjects */
/**
 * @summary Encodes a(n) AuthObjects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthObjects, encoded as an ASN.1 Element.
 */
export function _encode_AuthObjects(
    value: AuthObjects,
    elGetter: $.ASN1Encoder<AuthObjects>
) {
    if (!_cached_encoder_for_AuthObjects) {
        _cached_encoder_for_AuthObjects = _get_encoder_for_PathOrObjects<AuthenticationType>(
            _encode_AuthenticationType
        );
    }
    return _cached_encoder_for_AuthObjects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthObjects */

/* eslint-enable */
