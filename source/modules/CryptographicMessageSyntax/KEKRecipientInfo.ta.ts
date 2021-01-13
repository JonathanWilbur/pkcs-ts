/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta";
import {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax/EncryptedKey.ta";
import {
    KEKIdentifier,
    _decode_KEKIdentifier,
    _encode_KEKIdentifier,
} from "../CryptographicMessageSyntax/KEKIdentifier.ta";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/KeyEncryptionAlgorithmIdentifier.ta";
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta";
export {
    EncryptedKey,
    _decode_EncryptedKey,
    _encode_EncryptedKey,
} from "../CryptographicMessageSyntax/EncryptedKey.ta";
export {
    KEKIdentifier,
    _decode_KEKIdentifier,
    _encode_KEKIdentifier,
} from "../CryptographicMessageSyntax/KEKIdentifier.ta";
export {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/KeyEncryptionAlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION KEKRecipientInfo */
/**
 * @summary KEKRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEKRecipientInfo ::= SEQUENCE {
 *   version                 CMSVersion, -- always set to 4
 *   kekid                   KEKIdentifier,
 *   keyEncryptionAlgorithm  KeyEncryptionAlgorithmIdentifier,
 *   encryptedKey            EncryptedKey
 * }
 * ```
 *
 * @class
 */
export class KEKRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `kekid`.
         * @public
         * @readonly
         */
        readonly kekid: KEKIdentifier,
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
     * @summary Restructures an object into a KEKRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KEKRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KEKRecipientInfo`.
     * @returns {KEKRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof KEKRecipientInfo]: KEKRecipientInfo[_K] }
    ): KEKRecipientInfo {
        return new KEKRecipientInfo(
            _o.version,
            _o.kekid,
            _o.keyEncryptionAlgorithm,
            _o.encryptedKey
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KEKRecipientInfo */
/**
 * @summary The Leading Root Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "kekid",
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KEKRecipientInfo */
/**
 * @summary The Trailing Root Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KEKRecipientInfo */
/**
 * @summary The Extension Addition Component Types of KEKRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KEKRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KEKRecipientInfo */
let _cached_decoder_for_KEKRecipientInfo: $.ASN1Decoder<KEKRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KEKRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KEKRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KEKRecipientInfo} The decoded data structure.
 */
export function _decode_KEKRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KEKRecipientInfo) {
        _cached_decoder_for_KEKRecipientInfo = function (
            el: _Element
        ): KEKRecipientInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "KEKRecipientInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "kekid";
            sequence[2].name = "keyEncryptionAlgorithm";
            sequence[3].name = "encryptedKey";
            let version!: CMSVersion;
            let kekid!: KEKIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let encryptedKey!: EncryptedKey;
            version = _decode_CMSVersion(sequence[0]);
            kekid = _decode_KEKIdentifier(sequence[1]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[2]
            );
            encryptedKey = _decode_EncryptedKey(sequence[3]);
            return new KEKRecipientInfo(
                version,
                kekid,
                keyEncryptionAlgorithm,
                encryptedKey
            );
        };
    }
    return _cached_decoder_for_KEKRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KEKRecipientInfo */
let _cached_encoder_for_KEKRecipientInfo: $.ASN1Encoder<KEKRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KEKRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KEKRecipientInfo */
/**
 * @summary Encodes a(n) KEKRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEKRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KEKRecipientInfo(
    value: KEKRecipientInfo,
    elGetter: $.ASN1Encoder<KEKRecipientInfo>
) {
    if (!_cached_encoder_for_KEKRecipientInfo) {
        _cached_encoder_for_KEKRecipientInfo = function (
            value: KEKRecipientInfo,
            elGetter: $.ASN1Encoder<KEKRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_KEKIdentifier(
                            value.kekid,
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
    return _cached_encoder_for_KEKRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KEKRecipientInfo */

/* eslint-enable */
