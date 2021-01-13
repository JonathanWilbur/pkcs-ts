/* eslint-disable */
import { ASN1Element as _Element, IA5String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "x500-ts/dist/node/modules/SelectedAttributeTypes/DirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION PKCS9String */
/**
 * @summary PKCS9String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS9String {INTEGER : maxSize}  ::=  CHOICE {
 *         ia5String IA5String (SIZE(1..maxSize)),
 *         directoryString DirectoryString {maxSize}
 * }
 * ```
 */
export type PKCS9String =
    | { ia5String: IA5String } /* CHOICE_ALT_ROOT */
    | { directoryString: DirectoryString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PKCS9String */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS9String */
let _cached_decoder_for_PKCS9String: $.ASN1Decoder<PKCS9String> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS9String */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS9String */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS9String
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS9String} The decoded data structure.
 */
export function _decode_PKCS9String(el: _Element) {
    if (!_cached_decoder_for_PKCS9String) {
        _cached_decoder_for_PKCS9String = $._decode_inextensible_choice<PKCS9String>(
            {
                "UNIVERSAL 22": ["ia5String", $._decodeIA5String],
                "UNIVERSAL 20": ["directoryString", _decode_DirectoryString],
                "UNIVERSAL 19": ["directoryString", _decode_DirectoryString],
                "UNIVERSAL 28": ["directoryString", _decode_DirectoryString],
                "UNIVERSAL 30": ["directoryString", _decode_DirectoryString],
                "UNIVERSAL 12": ["directoryString", _decode_DirectoryString],
            }
        );
    }
    return _cached_decoder_for_PKCS9String(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS9String */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS9String */
let _cached_encoder_for_PKCS9String: $.ASN1Encoder<PKCS9String> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS9String */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS9String */
/**
 * @summary Encodes a(n) PKCS9String into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS9String, encoded as an ASN.1 Element.
 */
export function _encode_PKCS9String(
    value: PKCS9String,
    elGetter: $.ASN1Encoder<PKCS9String>
) {
    if (!_cached_encoder_for_PKCS9String) {
        _cached_encoder_for_PKCS9String = $._encode_choice<PKCS9String>(
            {
                ia5String: $._encodeIA5String,
                directoryString: _encode_DirectoryString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PKCS9String(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS9String */

/* eslint-enable */
