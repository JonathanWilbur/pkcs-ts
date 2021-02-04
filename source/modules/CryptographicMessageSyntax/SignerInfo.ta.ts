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
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/DigestAlgorithmIdentifier.ta";
import {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/SignatureAlgorithmIdentifier.ta";
import {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from "../CryptographicMessageSyntax/SignatureValue.ta";
import {
    SignedAttributes,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
} from "../CryptographicMessageSyntax/SignedAttributes.ta";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax/SignerIdentifier.ta";
import {
    UnsignedAttributes,
    _decode_UnsignedAttributes,
    _encode_UnsignedAttributes,
} from "../CryptographicMessageSyntax/UnsignedAttributes.ta";
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
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/DigestAlgorithmIdentifier.ta";
export {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/SignatureAlgorithmIdentifier.ta";
export {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from "../CryptographicMessageSyntax/SignatureValue.ta";
export {
    SignedAttributes,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
} from "../CryptographicMessageSyntax/SignedAttributes.ta";
export {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax/SignerIdentifier.ta";
export {
    UnsignedAttributes,
    _decode_UnsignedAttributes,
    _encode_UnsignedAttributes,
} from "../CryptographicMessageSyntax/UnsignedAttributes.ta";

/* START_OF_SYMBOL_DEFINITION SignerInfo */
/**
 * @summary SignerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *   version             CMSVersion,
 *   sid                 SignerIdentifier,
 *   digestAlgorithm     DigestAlgorithmIdentifier,
 *   signedAttrs         [0] IMPLICIT SignedAttributes OPTIONAL,
 *   signatureAlgorithm  SignatureAlgorithmIdentifier,
 *   signature           SignatureValue,
 *   unsignedAttrs       [1] IMPLICIT UnsignedAttributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SignerInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `sid`.
         * @public
         * @readonly
         */
        readonly sid: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `signedAttrs`.
         * @public
         * @readonly
         */
        readonly signedAttrs: OPTIONAL<SignedAttributes>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SignatureValue,
        /**
         * @summary `unsignedAttrs`.
         * @public
         * @readonly
         */
        readonly unsignedAttrs: OPTIONAL<UnsignedAttributes>
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     *
     * This takes an `object` and converts it to a `SignerInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SignerInfo]: SignerInfo[_K] }
    ): SignerInfo {
        return new SignerInfo(
            _o.version,
            _o.sid,
            _o.digestAlgorithm,
            _o.signedAttrs,
            _o.signatureAlgorithm,
            _o.signature,
            _o.unsignedAttrs
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignerInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerInfo */
/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("sid", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signedAttrs",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "unsignedAttrs",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerInfo */
/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerInfo */
/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfo */
let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SignerInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfo} The decoded data structure.
 */
export function _decode_SignerInfo(el: _Element) {
    if (!_cached_decoder_for_SignerInfo) {
        _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: CMSVersion;
            let sid!: SignerIdentifier;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let signedAttrs: OPTIONAL<SignedAttributes>;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: SignatureValue;
            let unsignedAttrs: OPTIONAL<UnsignedAttributes>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                sid: (_el: _Element): void => {
                    sid = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                signedAttrs: (_el: _Element): void => {
                    signedAttrs = $._decode_implicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                signature: (_el: _Element): void => {
                    signature = _decode_SignatureValue(_el);
                },
                unsignedAttrs: (_el: _Element): void => {
                    unsignedAttrs = $._decode_implicit<UnsignedAttributes>(
                        () => _decode_UnsignedAttributes
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignerInfo,
                _extension_additions_list_spec_for_SignerInfo,
                _root_component_type_list_2_spec_for_SignerInfo,
                undefined
            );
            return new SignerInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                sid,
                digestAlgorithm,
                signedAttrs,
                signatureAlgorithm,
                signature,
                unsignedAttrs
            );
        };
    }
    return _cached_decoder_for_SignerInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfo */
let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignerInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SignerInfo */
/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfo(
    value: SignerInfo,
    elGetter: $.ASN1Encoder<SignerInfo>
) {
    if (!_cached_encoder_for_SignerInfo) {
        _cached_encoder_for_SignerInfo = function (
            value: SignerInfo,
            elGetter: $.ASN1Encoder<SignerInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignerIdentifier(
                            value.sid,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.signedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SignedAttributes,
                                  $.BER
                              )(value.signedAttrs, $.BER),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureValue(
                            value.signature,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unsignedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UnsignedAttributes,
                                  $.BER
                              )(value.unsignedAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignerInfo */

/* eslint-enable */
