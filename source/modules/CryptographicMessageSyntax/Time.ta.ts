/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime, UTCTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Time */
/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {utcTime      UTCTime,
 *                  generalTime  GeneralizedTime
 * }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalTime: GeneralizedTime } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */
let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Time */
/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decode_inextensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
            "UNIVERSAL 24": ["generalTime", $._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */
let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Time */
/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encode_choice<Time>(
            {
                utcTime: $._encodeUTCTime,
                generalTime: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Time */

/* eslint-enable */
