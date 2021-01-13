/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
import {
    KeyManagementInfo_Item_keyInfo,
    _decode_KeyManagementInfo_Item_keyInfo,
    _encode_KeyManagementInfo_Item_keyInfo,
} from "../PKCS-15/KeyManagementInfo-Item-keyInfo.ta";
export {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
export {
    KeyManagementInfo_Item_keyInfo,
    _decode_KeyManagementInfo_Item_keyInfo,
    _encode_KeyManagementInfo_Item_keyInfo,
} from "../PKCS-15/KeyManagementInfo-Item-keyInfo.ta";

/* START_OF_SYMBOL_DEFINITION KeyManagementInfo_Item */
/**
 * @summary KeyManagementInfo_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyManagementInfo-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class KeyManagementInfo_Item {
    constructor(
        /**
         * @summary `keyId`.
         * @public
         * @readonly
         */
        readonly keyId: Identifier,
        /**
         * @summary `keyInfo`.
         * @public
         * @readonly
         */
        readonly keyInfo: KeyManagementInfo_Item_keyInfo
    ) {}

    /**
     * @summary Restructures an object into a KeyManagementInfo_Item
     * @description
     *
     * This takes an `object` and converts it to a `KeyManagementInfo_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyManagementInfo_Item`.
     * @returns {KeyManagementInfo_Item}
     */
    public static _from_object(
        _o: { [_K in keyof KeyManagementInfo_Item]: KeyManagementInfo_Item[_K] }
    ): KeyManagementInfo_Item {
        return new KeyManagementInfo_Item(_o.keyId, _o.keyInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyManagementInfo_Item */
/**
 * @summary The Leading Root Component Types of KeyManagementInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyManagementInfo_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyId",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec("keyInfo", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyManagementInfo_Item */
/**
 * @summary The Trailing Root Component Types of KeyManagementInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyManagementInfo_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyManagementInfo_Item */
/**
 * @summary The Extension Addition Component Types of KeyManagementInfo_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyManagementInfo_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo_Item */
let _cached_decoder_for_KeyManagementInfo_Item: $.ASN1Decoder<KeyManagementInfo_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyManagementInfo_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyManagementInfo_Item} The decoded data structure.
 */
export function _decode_KeyManagementInfo_Item(el: _Element) {
    if (!_cached_decoder_for_KeyManagementInfo_Item) {
        _cached_decoder_for_KeyManagementInfo_Item = function (
            el: _Element
        ): KeyManagementInfo_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyManagementInfo-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyId";
            sequence[1].name = "keyInfo";
            let keyId!: Identifier;
            let keyInfo!: KeyManagementInfo_Item_keyInfo;
            keyId = _decode_Identifier(sequence[0]);
            keyInfo = _decode_KeyManagementInfo_Item_keyInfo(sequence[1]);
            return new KeyManagementInfo_Item(keyId, keyInfo);
        };
    }
    return _cached_decoder_for_KeyManagementInfo_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo_Item */
let _cached_encoder_for_KeyManagementInfo_Item: $.ASN1Encoder<KeyManagementInfo_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyManagementInfo_Item */

/* START_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo_Item */
/**
 * @summary Encodes a(n) KeyManagementInfo_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyManagementInfo_Item, encoded as an ASN.1 Element.
 */
export function _encode_KeyManagementInfo_Item(
    value: KeyManagementInfo_Item,
    elGetter: $.ASN1Encoder<KeyManagementInfo_Item>
) {
    if (!_cached_encoder_for_KeyManagementInfo_Item) {
        _cached_encoder_for_KeyManagementInfo_Item = function (
            value: KeyManagementInfo_Item,
            elGetter: $.ASN1Encoder<KeyManagementInfo_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Identifier(value.keyId, $.BER),
                        /* REQUIRED   */ _encode_KeyManagementInfo_Item_keyInfo(
                            value.keyInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyManagementInfo_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyManagementInfo_Item */

/* eslint-enable */
