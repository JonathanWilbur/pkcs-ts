/* eslint-disable */
/**
 * These symbols are imported to override incorrect or obsolete definitions
 * provided in the ITU X.420 specification of PKCS #7. For example, `Digest`
 * has a more complicated type defined within ITU X.420, but in the
 * authoritative IETF RFC definition, `Digest` is simply an `OCTET STRING`.
 * This overriding is important, because OpenSSL will fail to read PKCS #7
 * structures that use the X.420-based `Digest` definition, for example.
 */
export {
    Digest,
    _decode_Digest,
    _encode_Digest,
} from "cms-ts/dist/node/modules/CryptographicMessageSyntax-2010/Digest.ta";

import { ASN1Element, ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "x500-ts/dist/node/modules/AuthenticationFramework/HASH.ta";
import { Attributes } from "../PKCS7/Attributes.ta";

type ToBeHashed =
    | { content: _Element }
    | { authenticated_attributes: Attributes };

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
export type X420Digest = HASH<ToBeHashed>; // DefinedType
/* END_OF_SYMBOL_DEFINITION Digest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */
let _cached_decoder_for_Digest: $.ASN1Decoder<X420Digest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _decode_Digest */
/**
 * @summary Decodes an ASN.1 element into a(n) Digest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Digest} The decoded data structure.
 */
export function _decode_X420Digest(el: _Element) {
    if (!_cached_decoder_for_Digest) {
        _cached_decoder_for_Digest = _get_decoder_for_HASH<_Element>(
            $._decodeAny
        );
    }
    return _cached_decoder_for_Digest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Digest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */
let _cached_encoder_for_Digest: $.ASN1Encoder<X420Digest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Digest */

/* START_OF_SYMBOL_DEFINITION _encode_Digest */
/**
 * @summary Encodes a(n) Digest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digest, encoded as an ASN.1 Element.
 */
export function _encode_X420Digest(
    value: X420Digest,
    elGetter: $.ASN1Encoder<X420Digest>
) {
    if (!_cached_encoder_for_Digest) {
        _cached_encoder_for_Digest = _get_encoder_for_HASH<ASN1Element>(
            $._encodeAny
        );
    }
    return _cached_encoder_for_Digest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Digest */

/* eslint-enable */
