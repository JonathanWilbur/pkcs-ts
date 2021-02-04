/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/KeyEncryptionAlgorithmIdentifier.ta";
import {
    OriginatorIdentifierOrKey,
    _decode_OriginatorIdentifierOrKey,
    _encode_OriginatorIdentifierOrKey,
} from "../CryptographicMessageSyntax/OriginatorIdentifierOrKey.ta";
import {
    RecipientEncryptedKeys,
    _decode_RecipientEncryptedKeys,
    _encode_RecipientEncryptedKeys,
} from "../CryptographicMessageSyntax/RecipientEncryptedKeys.ta";
import {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../CryptographicMessageSyntax/UserKeyingMaterial.ta";
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
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/KeyEncryptionAlgorithmIdentifier.ta";
export {
    OriginatorIdentifierOrKey,
    _decode_OriginatorIdentifierOrKey,
    _encode_OriginatorIdentifierOrKey,
} from "../CryptographicMessageSyntax/OriginatorIdentifierOrKey.ta";
export {
    RecipientEncryptedKeys,
    _decode_RecipientEncryptedKeys,
    _encode_RecipientEncryptedKeys,
} from "../CryptographicMessageSyntax/RecipientEncryptedKeys.ta";
export {
    UserKeyingMaterial,
    _decode_UserKeyingMaterial,
    _encode_UserKeyingMaterial,
} from "../CryptographicMessageSyntax/UserKeyingMaterial.ta";

/* START_OF_SYMBOL_DEFINITION KeyAgreeRecipientInfo */
/**
 * @summary KeyAgreeRecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreeRecipientInfo ::= SEQUENCE {
 *   version                 CMSVersion, -- always set to 3
 *   originator              [0] EXPLICIT OriginatorIdentifierOrKey,
 *   ukm                     [1] EXPLICIT UserKeyingMaterial OPTIONAL,
 *   keyEncryptionAlgorithm  KeyEncryptionAlgorithmIdentifier,
 *   recipientEncryptedKeys  RecipientEncryptedKeys
 * }
 * ```
 *
 * @class
 */
export class KeyAgreeRecipientInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OriginatorIdentifierOrKey,
        /**
         * @summary `ukm`.
         * @public
         * @readonly
         */
        readonly ukm: OPTIONAL<UserKeyingMaterial>,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier,
        /**
         * @summary `recipientEncryptedKeys`.
         * @public
         * @readonly
         */
        readonly recipientEncryptedKeys: RecipientEncryptedKeys
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreeRecipientInfo
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreeRecipientInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreeRecipientInfo`.
     * @returns {KeyAgreeRecipientInfo}
     */
    public static _from_object(
        _o: { [_K in keyof KeyAgreeRecipientInfo]: KeyAgreeRecipientInfo[_K] }
    ): KeyAgreeRecipientInfo {
        return new KeyAgreeRecipientInfo(
            _o.version,
            _o.originator,
            _o.ukm,
            _o.keyEncryptionAlgorithm,
            _o.recipientEncryptedKeys
        );
    }
}
/* END_OF_SYMBOL_DEFINITION KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Leading Root Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "originator",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ukm",
        true,
        $.hasTag(_TagClass.context, 1),
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
        "recipientEncryptedKeys",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Trailing Root Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreeRecipientInfo */
/**
 * @summary The Extension Addition Component Types of KeyAgreeRecipientInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreeRecipientInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientInfo */
let _cached_decoder_for_KeyAgreeRecipientInfo: $.ASN1Decoder<KeyAgreeRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreeRecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreeRecipientInfo} The decoded data structure.
 */
export function _decode_KeyAgreeRecipientInfo(el: _Element) {
    if (!_cached_decoder_for_KeyAgreeRecipientInfo) {
        _cached_decoder_for_KeyAgreeRecipientInfo = function (
            el: _Element
        ): KeyAgreeRecipientInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let originator!: OriginatorIdentifierOrKey;
            let ukm: OPTIONAL<UserKeyingMaterial>;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            let recipientEncryptedKeys!: RecipientEncryptedKeys;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                originator: (_el: _Element): void => {
                    originator = $._decode_explicit<OriginatorIdentifierOrKey>(
                        () => _decode_OriginatorIdentifierOrKey
                    )(_el);
                },
                ukm: (_el: _Element): void => {
                    ukm = $._decode_explicit<UserKeyingMaterial>(
                        () => _decode_UserKeyingMaterial
                    )(_el);
                },
                keyEncryptionAlgorithm: (_el: _Element): void => {
                    keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                        _el
                    );
                },
                recipientEncryptedKeys: (_el: _Element): void => {
                    recipientEncryptedKeys = _decode_RecipientEncryptedKeys(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyAgreeRecipientInfo,
                _extension_additions_list_spec_for_KeyAgreeRecipientInfo,
                _root_component_type_list_2_spec_for_KeyAgreeRecipientInfo,
                undefined
            );
            return new KeyAgreeRecipientInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                originator,
                ukm,
                keyEncryptionAlgorithm,
                recipientEncryptedKeys
            );
        };
    }
    return _cached_decoder_for_KeyAgreeRecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientInfo */
let _cached_encoder_for_KeyAgreeRecipientInfo: $.ASN1Encoder<KeyAgreeRecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyAgreeRecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientInfo */
/**
 * @summary Encodes a(n) KeyAgreeRecipientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreeRecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreeRecipientInfo(
    value: KeyAgreeRecipientInfo,
    elGetter: $.ASN1Encoder<KeyAgreeRecipientInfo>
) {
    if (!_cached_encoder_for_KeyAgreeRecipientInfo) {
        _cached_encoder_for_KeyAgreeRecipientInfo = function (
            value: KeyAgreeRecipientInfo,
            elGetter: $.ASN1Encoder<KeyAgreeRecipientInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OriginatorIdentifierOrKey,
                            $.BER
                        )(value.originator, $.BER),
                        /* IF_ABSENT  */ value.ukm === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UserKeyingMaterial,
                                  $.BER
                              )(value.ukm, $.BER),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_RecipientEncryptedKeys(
                            value.recipientEncryptedKeys,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_KeyAgreeRecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyAgreeRecipientInfo */

/* eslint-enable */
