/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CredentialIdentifier,
    _decode_CredentialIdentifier,
    _encode_CredentialIdentifier,
} from "../PKCS-15/CredentialIdentifier.ta";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
import { Usage, _decode_Usage, _encode_Usage } from "../PKCS-15/Usage.ta";
import {
    OOBCertHash,
    _decode_OOBCertHash,
    _encode_OOBCertHash,
} from "../PKIXCMP-2009/OOBCertHash.ta";

/* START_OF_SYMBOL_DEFINITION CommonCertificateAttributes */
/**
 * @summary CommonCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonCertificateAttributes ::= SEQUENCE {
 *     iD Identifier,
 *     authority BOOLEAN DEFAULT FALSE,
 *     identifier CredentialIdentifier{{KeyIdentifiers}} OPTIONAL,
 *     certHash [0] OOBCertHash OPTIONAL,
 *     ...,
 *     trustedUsage [1] Usage OPTIONAL,
 *     identifiers [2] SEQUENCE OF CredentialIdentifier{{KeyIdentifiers}} OPTIONAL,
 *     implicitTrust [3] BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class CommonCertificateAttributes {
    constructor(
        /**
         * @summary `iD`.
         * @public
         * @readonly
         */
        readonly iD: Identifier,
        /**
         * @summary `authority`.
         * @public
         * @readonly
         */
        readonly authority: OPTIONAL<BOOLEAN>,
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OPTIONAL<CredentialIdentifier>,
        /**
         * @summary `certHash`.
         * @public
         * @readonly
         */
        readonly certHash: OPTIONAL<OOBCertHash>,
        /**
         * @summary `trustedUsage`.
         * @public
         * @readonly
         */
        readonly trustedUsage: OPTIONAL<Usage>,
        /**
         * @summary `identifiers`.
         * @public
         * @readonly
         */
        readonly identifiers: OPTIONAL<CredentialIdentifier[]>,
        /**
         * @summary `implicitTrust`.
         * @public
         * @readonly
         */
        readonly implicitTrust: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonCertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonCertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonCertificateAttributes`.
     * @returns {CommonCertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof CommonCertificateAttributes]: CommonCertificateAttributes[_K];
        }
    ): CommonCertificateAttributes {
        return new CommonCertificateAttributes(
            _o.iD,
            _o.authority,
            _o.identifier,
            _o.certHash,
            _o.trustedUsage,
            _o.identifiers,
            _o.implicitTrust,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `authority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_authority() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `implicitTrust`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_implicitTrust() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonCertificateAttributes */
/**
 * @summary The Leading Root Component Types of CommonCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "iD",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authority",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "identifier",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certHash",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined,
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonCertificateAttributes */
/**
 * @summary The Trailing Root Component Types of CommonCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonCertificateAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonCertificateAttributes */
/**
 * @summary The Extension Addition Component Types of CommonCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "trustedUsage",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "identifiers",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "implicitTrust",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonCertificateAttributes */
let _cached_decoder_for_CommonCertificateAttributes: $.ASN1Decoder<CommonCertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CommonCertificateAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonCertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonCertificateAttributes} The decoded data structure.
 */
export function _decode_CommonCertificateAttributes(el: _Element) {
    if (!_cached_decoder_for_CommonCertificateAttributes) {
        _cached_decoder_for_CommonCertificateAttributes = function (
            el: _Element
        ): CommonCertificateAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let iD!: Identifier;
            let authority: OPTIONAL<BOOLEAN> =
                CommonCertificateAttributes._default_value_for_authority;
            let identifier: OPTIONAL<CredentialIdentifier>;
            let certHash: OPTIONAL<OOBCertHash>;
            let trustedUsage: OPTIONAL<Usage>;
            let identifiers: OPTIONAL<CredentialIdentifier[]>;
            let implicitTrust: OPTIONAL<BOOLEAN> =
                CommonCertificateAttributes._default_value_for_implicitTrust;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                iD: (_el: _Element): void => {
                    iD = _decode_Identifier(_el);
                },
                authority: (_el: _Element): void => {
                    authority = $._decodeBoolean(_el);
                },
                identifier: (_el: _Element): void => {
                    identifier = _decode_CredentialIdentifier(_el);
                },
                certHash: (_el: _Element): void => {
                    certHash = $._decode_implicit<OOBCertHash>(
                        () => _decode_OOBCertHash
                    )(_el);
                },
                trustedUsage: (_el: _Element): void => {
                    trustedUsage = $._decode_implicit<Usage>(
                        () => _decode_Usage
                    )(_el);
                },
                identifiers: (_el: _Element): void => {
                    identifiers = $._decode_implicit<CredentialIdentifier[]>(
                        () =>
                            $._decodeSequenceOf<CredentialIdentifier>(
                                () => _decode_CredentialIdentifier
                            )
                    )(_el);
                },
                implicitTrust: (_el: _Element): void => {
                    implicitTrust = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonCertificateAttributes,
                _extension_additions_list_spec_for_CommonCertificateAttributes,
                _root_component_type_list_2_spec_for_CommonCertificateAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonCertificateAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ iD,
                authority,
                identifier,
                certHash,
                trustedUsage,
                identifiers,
                implicitTrust,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonCertificateAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonCertificateAttributes */
let _cached_encoder_for_CommonCertificateAttributes: $.ASN1Encoder<CommonCertificateAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonCertificateAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CommonCertificateAttributes */
/**
 * @summary Encodes a(n) CommonCertificateAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonCertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonCertificateAttributes(
    value: CommonCertificateAttributes,
    elGetter: $.ASN1Encoder<CommonCertificateAttributes>
) {
    if (!_cached_encoder_for_CommonCertificateAttributes) {
        _cached_encoder_for_CommonCertificateAttributes = function (
            value: CommonCertificateAttributes,
            elGetter: $.ASN1Encoder<CommonCertificateAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Identifier(
                                value.iD,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.authority === undefined ||
                            $.deepEq(
                                value.authority,
                                CommonCertificateAttributes._default_value_for_authority
                            )
                                ? undefined
                                : $._encodeBoolean(value.authority, $.BER),
                            /* IF_ABSENT  */ value.identifier === undefined
                                ? undefined
                                : _encode_CredentialIdentifier(
                                      value.identifier,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.certHash === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_OOBCertHash,
                                      $.BER
                                  )(value.certHash, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.trustedUsage === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Usage,
                                      $.BER
                                  )(value.trustedUsage, $.BER),
                            /* IF_ABSENT  */ value.identifiers === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<CredentialIdentifier>(
                                              () =>
                                                  _encode_CredentialIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.identifiers, $.BER),
                            /* IF_DEFAULT */ value.implicitTrust ===
                                undefined ||
                            $.deepEq(
                                value.implicitTrust,
                                CommonCertificateAttributes._default_value_for_implicitTrust
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.implicitTrust, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CommonCertificateAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonCertificateAttributes */

/* eslint-enable */
