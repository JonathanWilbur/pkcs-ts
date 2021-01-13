/* eslint-disable */
import { ASN1Element, ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "x500-ts/dist/node/modules/AuthenticationFramework/HASH.ta";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS7/Attributes.ta";

type ToBeHashed = { content: _Element } | { authenticated_attributes: Attributes };

/* START_OF_SYMBOL_DEFINITION Digest */
/**
 * @summary Digest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digest  ::=
 *     HASH
 *         {CHOICE {content
 *                 [1]  PKCS7-CONTENT-TYPE.&Type({PKCS7ContentTable}),
 *                 authenticated-attributes  [0] EXPLICIT Attributes}}
 * ```
 */
export type Digest = HASH<ToBeHashed>; // DefinedType
/* END_OF_SYMBOL_DEFINITION Digest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */
let _cached_decoder_for_Digest: $.ASN1Decoder<Digest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _decode_Digest */
/**
 * @summary Decodes an ASN.1 element into a(n) Digest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Digest} The decoded data structure.
 */
export function _decode_Digest(el: _Element) {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = _get_decoder_for_HASH<_Element>(
            $._decodeAny,
        );
    }
    return _cached_decoder_for_Digest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Digest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */
let _cached_encoder_for_Digest: $.ASN1Encoder<Digest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _encode_Digest */
/**
 * @summary Encodes a(n) Digest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digest, encoded as an ASN.1 Element.
 */
export function _encode_Digest(value: Digest, elGetter: $.ASN1Encoder<Digest>) {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = _get_encoder_for_HASH<ASN1Element>(
            $._encodeAny,
        );
    }
    return _cached_encoder_for_Digest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Digest */

/* eslint-enable */
