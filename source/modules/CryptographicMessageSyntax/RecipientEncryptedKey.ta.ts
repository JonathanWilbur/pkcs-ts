/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax/EncryptedKey.ta";
import {
    KeyAgreeRecipientIdentifier,
    _decode_KeyAgreeRecipientIdentifier,
    _encode_KeyAgreeRecipientIdentifier,
} from "../CryptographicMessageSyntax/KeyAgreeRecipientIdentifier.ta";
export {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax/EncryptedKey.ta";
export {
    KeyAgreeRecipientIdentifier,
    _decode_KeyAgreeRecipientIdentifier,
    _encode_KeyAgreeRecipientIdentifier,
} from "../CryptographicMessageSyntax/KeyAgreeRecipientIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION RecipientEncryptedKey */
/**
 * @summary RecipientEncryptedKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientEncryptedKey ::= SEQUENCE {
 *   rid           KeyAgreeRecipientIdentifier,
 *   encryptedKey  EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class RecipientEncryptedKey {
    constructor(
        /**
         * @summary `rid`.
         * @public
         * @readonly
         */
        readonly rid: KeyAgreeRecipientIdentifier,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a RecipientEncryptedKey
     * @description
     *
     * This takes an `object` and converts it to a `RecipientEncryptedKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecipientEncryptedKey`.
     * @returns {RecipientEncryptedKey}
     */
    public static _from_object(
        _o: { [_K in keyof RecipientEncryptedKey]: RecipientEncryptedKey[_K] }
    ): RecipientEncryptedKey {
        return new RecipientEncryptedKey(_o.rid, _o.encryptedKey);
    }
}
/* END_OF_SYMBOL_DEFINITION RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientEncryptedKey */
/**
 * @summary The Leading Root Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [
    new $.ComponentSpec("rid", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientEncryptedKey */
/**
 * @summary The Trailing Root Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientEncryptedKey */
/**
 * @summary The Extension Addition Component Types of RecipientEncryptedKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RecipientEncryptedKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKey */
let _cached_decoder_for_RecipientEncryptedKey: $.ASN1Decoder<RecipientEncryptedKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKey */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientEncryptedKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientEncryptedKey} The decoded data structure.
 */
export function _decode_RecipientEncryptedKey(el: _Element) {
    if (!_cached_decoder_for_RecipientEncryptedKey) {
        _cached_decoder_for_RecipientEncryptedKey = function (
            el: _Element
        ): RecipientEncryptedKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "RecipientEncryptedKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rid";
            sequence[1].name = "encryptedKey";
            let rid!: KeyAgreeRecipientIdentifier;
            let encryptedKey!: EncryptedKey;
            rid = _decode_KeyAgreeRecipientIdentifier(sequence[0]);
            encryptedKey = _decode_EncryptedKey(sequence[1]);
            return new RecipientEncryptedKey(rid, encryptedKey);
        };
    }
    return _cached_decoder_for_RecipientEncryptedKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKey */
let _cached_encoder_for_RecipientEncryptedKey: $.ASN1Encoder<RecipientEncryptedKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKey */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKey */
/**
 * @summary Encodes a(n) RecipientEncryptedKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientEncryptedKey, encoded as an ASN.1 Element.
 */
export function _encode_RecipientEncryptedKey(
    value: RecipientEncryptedKey,
    elGetter: $.ASN1Encoder<RecipientEncryptedKey>
) {
    if (!_cached_encoder_for_RecipientEncryptedKey) {
        _cached_encoder_for_RecipientEncryptedKey = function (
            value: RecipientEncryptedKey,
            elGetter: $.ASN1Encoder<RecipientEncryptedKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_KeyAgreeRecipientIdentifier(
                            value.rid,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedKey(
                            value.encryptedKey,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RecipientEncryptedKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKey */

/* eslint-enable */
