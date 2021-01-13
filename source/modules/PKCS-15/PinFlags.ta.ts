/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PinFlags */
/**
 * @summary PinFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PinFlags  ::=  BIT STRING {
 *     case-sensitive (0),
 *     local (1),
 *     change-disabled (2),
 *     unblock-disabled (3),
 *     initialized  (4),
 *     needs-padding (5),
 *     unblockingPin (6),
 *     soPin (7),
 *     disable-allowed (8),
 *     integrity-protected (9),
 *     confidentiality-protected (10),
 *     exchangeRefData (11)
 * } (CONSTRAINED BY { -- 'unblockingPin' and 'soPIN' cannot both be set -- })
 * ```
 */
export type PinFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PinFlags */

/* START_OF_SYMBOL_DEFINITION PinFlags_case_sensitive */
/**
 * @summary PinFlags_case_sensitive
 * @constant
 */
export const PinFlags_case_sensitive: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_case_sensitive */

/* START_OF_SYMBOL_DEFINITION case_sensitive */
/**
 * @summary case_sensitive
 * @constant
 */
export const case_sensitive: number = PinFlags_case_sensitive; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION case_sensitive */

/* START_OF_SYMBOL_DEFINITION PinFlags_local */
/**
 * @summary PinFlags_local
 * @constant
 */
export const PinFlags_local: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_local */

/* START_OF_SYMBOL_DEFINITION local */
/**
 * @summary local
 * @constant
 */
export const local: number = PinFlags_local; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION local */

/* START_OF_SYMBOL_DEFINITION PinFlags_change_disabled */
/**
 * @summary PinFlags_change_disabled
 * @constant
 */
export const PinFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_change_disabled */

/* START_OF_SYMBOL_DEFINITION change_disabled */
/**
 * @summary change_disabled
 * @constant
 */
export const change_disabled: number = PinFlags_change_disabled; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION change_disabled */

/* START_OF_SYMBOL_DEFINITION PinFlags_unblock_disabled */
/**
 * @summary PinFlags_unblock_disabled
 * @constant
 */
export const PinFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_unblock_disabled */

/* START_OF_SYMBOL_DEFINITION unblock_disabled */
/**
 * @summary unblock_disabled
 * @constant
 */
export const unblock_disabled: number = PinFlags_unblock_disabled; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unblock_disabled */

/* START_OF_SYMBOL_DEFINITION PinFlags_initialized */
/**
 * @summary PinFlags_initialized
 * @constant
 */
export const PinFlags_initialized: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_initialized */

/* START_OF_SYMBOL_DEFINITION initialized */
/**
 * @summary initialized
 * @constant
 */
export const initialized: number = PinFlags_initialized; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION initialized */

/* START_OF_SYMBOL_DEFINITION PinFlags_needs_padding */
/**
 * @summary PinFlags_needs_padding
 * @constant
 */
export const PinFlags_needs_padding: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_needs_padding */

/* START_OF_SYMBOL_DEFINITION needs_padding */
/**
 * @summary needs_padding
 * @constant
 */
export const needs_padding: number = PinFlags_needs_padding; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION needs_padding */

/* START_OF_SYMBOL_DEFINITION PinFlags_unblockingPin */
/**
 * @summary PinFlags_unblockingPin
 * @constant
 */
export const PinFlags_unblockingPin: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_unblockingPin */

/* START_OF_SYMBOL_DEFINITION unblockingPin */
/**
 * @summary unblockingPin
 * @constant
 */
export const unblockingPin: number = PinFlags_unblockingPin; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unblockingPin */

/* START_OF_SYMBOL_DEFINITION PinFlags_soPin */
/**
 * @summary PinFlags_soPin
 * @constant
 */
export const PinFlags_soPin: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_soPin */

/* START_OF_SYMBOL_DEFINITION soPin */
/**
 * @summary soPin
 * @constant
 */
export const soPin: number = PinFlags_soPin; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION soPin */

/* START_OF_SYMBOL_DEFINITION PinFlags_disable_allowed */
/**
 * @summary PinFlags_disable_allowed
 * @constant
 */
export const PinFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_disable_allowed */

/* START_OF_SYMBOL_DEFINITION disable_allowed */
/**
 * @summary disable_allowed
 * @constant
 */
export const disable_allowed: number = PinFlags_disable_allowed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION disable_allowed */

/* START_OF_SYMBOL_DEFINITION PinFlags_integrity_protected */
/**
 * @summary PinFlags_integrity_protected
 * @constant
 */
export const PinFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_integrity_protected */

/* START_OF_SYMBOL_DEFINITION integrity_protected */
/**
 * @summary integrity_protected
 * @constant
 */
export const integrity_protected: number = PinFlags_integrity_protected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION integrity_protected */

/* START_OF_SYMBOL_DEFINITION PinFlags_confidentiality_protected */
/**
 * @summary PinFlags_confidentiality_protected
 * @constant
 */
export const PinFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_confidentiality_protected */

/* START_OF_SYMBOL_DEFINITION confidentiality_protected */
/**
 * @summary confidentiality_protected
 * @constant
 */
export const confidentiality_protected: number = PinFlags_confidentiality_protected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION confidentiality_protected */

/* START_OF_SYMBOL_DEFINITION PinFlags_exchangeRefData */
/**
 * @summary PinFlags_exchangeRefData
 * @constant
 */
export const PinFlags_exchangeRefData: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PinFlags_exchangeRefData */

/* START_OF_SYMBOL_DEFINITION exchangeRefData */
/**
 * @summary exchangeRefData
 * @constant
 */
export const exchangeRefData: number = PinFlags_exchangeRefData; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION exchangeRefData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PinFlags */
let _cached_decoder_for_PinFlags: $.ASN1Decoder<PinFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PinFlags */

/* START_OF_SYMBOL_DEFINITION _decode_PinFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) PinFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PinFlags} The decoded data structure.
 */
export function _decode_PinFlags(el: _Element) {
    if (!_cached_decoder_for_PinFlags) {
        _cached_decoder_for_PinFlags = $._decodeBitString;
    }
    return _cached_decoder_for_PinFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PinFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PinFlags */
let _cached_encoder_for_PinFlags: $.ASN1Encoder<PinFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PinFlags */

/* START_OF_SYMBOL_DEFINITION _encode_PinFlags */
/**
 * @summary Encodes a(n) PinFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PinFlags, encoded as an ASN.1 Element.
 */
export function _encode_PinFlags(
    value: PinFlags,
    elGetter: $.ASN1Encoder<PinFlags>
) {
    if (!_cached_encoder_for_PinFlags) {
        _cached_encoder_for_PinFlags = $._encodeBitString;
    }
    return _cached_encoder_for_PinFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PinFlags */

/* eslint-enable */
