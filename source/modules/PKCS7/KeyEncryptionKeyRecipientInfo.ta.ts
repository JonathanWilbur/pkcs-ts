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
} from "../PKCS7/EncryptedKey.ta";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../PKCS7/KeyEncryptionAlgorithmIdentifier.ta";
import {
    KeyEncryptionKeyIdentifier,
    _decode_KeyEncryptionKeyIdentifier,
    _encode_KeyEncryptionKeyIdentifier,
} from "../PKCS7/KeyEncryptionKeyIdentifier.ta";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";
export {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../PKCS7/EncryptedKey.ta";
export {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../PKCS7/KeyEncryptionAlgorithmIdentifier.ta";
export {
    KeyEncryptionKeyIdentifier,
    _decode_KeyEncryptionKeyIdentifier,
    _encode_KeyEncryptionKeyIdentifier,
} from "../PKCS7/KeyEncryptionKeyIdentifier.ta";
export { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta";

/* START_OF_SYMBOL_DEFINITION KeyEncryptionKeyRecipientInfo */
/**
 * @summary KeyEncryptionKeyRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyEncryptionKeyRecipientInfo ::= SEQUENCE {
 *     version                     Version,
 *     keyEncryptionKeyIdentifier  KeyEncryptionKeyIdentifier,
 *     keyEncryptionAlgorithm      KeyEncryptionAlgorithmIdentifier,
 *     encryptedKey                EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class KeyEncryptionKeyRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `keyEncryptionKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyEncryptionKeyIdentifier: KeyEncryptionKeyIdentifier,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: EncryptedKey
    ) {}

    /**
     * @summary Restructures an object into a KeyEncryptionKeyRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyEncryptionKeyRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyEncryptionKeyRecipientInfo`.
     * @returns {KeyEncryptionKeyRecipientInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyEncryptionKeyRecipientInfo]: KeyEncryptionKeyRecipientInfo[_K];
        }
    ): KeyEncryptionKeyRecipientInfo {
        return new KeyEncryptionKeyRecipientInfo(
            _o.version,
            _o.keyEncryptionKeyIdentifier,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyEncryptionKeyRecipientInfo */
/**
 * @summary The Leading Root Component Types of KeyEncryptionKeyRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyEncryptionKeyRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionKeyIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedKey",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyEncryptionKeyRecipientInfo */
/**
 * @summary The Trailing Root Component Types of KeyEncryptionKeyRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyEncryptionKeyRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyEncryptionKeyRecipientInfo */
/**
 * @summary The Extension Addition Component Types of KeyEncryptionKeyRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyEncryptionKeyRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyEncryptionKeyRecipientInfo */
let _cached_decoder_for_KeyEncryptionKeyRecipientInfo: $.ASN1Decoder<KeyEncryptionKeyRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyEncryptionKeyRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyEncryptionKeyRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyEncryptionKeyRecipientInfo} The decoded data structure.
 */
export function _decode_KeyEncryptionKeyRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KeyEncryptionKeyRecipientInfo) {
        _cached_decoder_for_KeyEncryptionKeyRecipientInfo = function (
            el: _Element
        ): KeyEncryptionKeyRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "KeyEncryptionKeyRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "keyEncryptionKeyIdentifier";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: Version;
            let keyEncryptionKeyIdentifier!: KeyEncryptionKeyIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_Version(sequence[0]);
            keyEncryptionKeyIdentifier = _decode_KeyEncryptionKeyIdentifier(
                sequence[1]
            );
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            return new KeyEncryptionKeyRecipientInfo(
                version,
                keyEncryptionKeyIdentifier,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KeyEncryptionKeyRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyEncryptionKeyRecipientInfo */
let _cached_encoder_for_KeyEncryptionKeyRecipientInfo: $.ASN1Encoder<KeyEncryptionKeyRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyEncryptionKeyRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyEncryptionKeyRecipientInfo */
/**
 * @summary Encodes a(n) KeyEncryptionKeyRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyEncryptionKeyRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyEncryptionKeyRecipientInfo(
    value: KeyEncryptionKeyRecipientInfo,
    elGetter: $.ASN1Encoder<KeyEncryptionKeyRecipientInfo>
) {
    if (!_cached_encoder_for_KeyEncryptionKeyRecipientInfo) {
        _cached_encoder_for_KeyEncryptionKeyRecipientInfo = function (
            value: KeyEncryptionKeyRecipientInfo,
            elGetter: $.ASN1Encoder<KeyEncryptionKeyRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ _encode_KeyEncryptionKeyIdentifier(
                            value.keyEncryptionKeyIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
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
    return _cached_encoder_for_KeyEncryptionKeyRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyEncryptionKeyRecipientInfo */

/* eslint-enable */
