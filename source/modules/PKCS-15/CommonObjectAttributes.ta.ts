/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessControlRule,
    _decode_AccessControlRule,
    _encode_AccessControlRule,
} from "../PKCS-15/AccessControlRule.ta";
import {
    CommonObjectFlags,
    _decode_CommonObjectFlags,
    _encode_CommonObjectFlags,
} from "../PKCS-15/CommonObjectFlags.ta";
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from "../PKCS-15/Identifier.ta";
import { Label, _decode_Label, _encode_Label } from "../PKCS-15/Label.ta";

/* START_OF_SYMBOL_DEFINITION CommonObjectAttributes */
/**
 * @summary CommonObjectAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonObjectAttributes ::= SEQUENCE {
 *     label Label OPTIONAL,
 *     flags  CommonObjectFlags OPTIONAL,
 *     authId Identifier OPTIONAL,
 *     ...,
 *     userConsent INTEGER (1..pkcs15-ub-userConsent) OPTIONAL,
 *     accessControlRules SEQUENCE SIZE (1..MAX) OF AccessControlRule OPTIONAL
 * } (CONSTRAINED BY {-- authId should be present in the IC card case if flags.private is set.
 * -- It must equal an authID in one AuthRecord in the AODF -- })
 * ```
 *
 * @class
 */
export class CommonObjectAttributes {
    constructor(
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: OPTIONAL<Label>,
        /**
         * @summary `flags`.
         * @public
         * @readonly
         */
        readonly flags: OPTIONAL<CommonObjectFlags>,
        /**
         * @summary `authId`.
         * @public
         * @readonly
         */
        readonly authId: OPTIONAL<Identifier>,
        /**
         * @summary `userConsent`.
         * @public
         * @readonly
         */
        readonly userConsent: OPTIONAL<INTEGER>,
        /**
         * @summary `accessControlRules`.
         * @public
         * @readonly
         */
        readonly accessControlRules: OPTIONAL<AccessControlRule[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonObjectAttributes
     * @description
     *
     * This takes an `object` and converts it to a `CommonObjectAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonObjectAttributes`.
     * @returns {CommonObjectAttributes}
     */
    public static _from_object(
        _o: { [_K in keyof CommonObjectAttributes]: CommonObjectAttributes[_K] }
    ): CommonObjectAttributes {
        return new CommonObjectAttributes(
            _o.label,
            _o.flags,
            _o.authId,
            _o.userConsent,
            _o.accessControlRules,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonObjectAttributes */
/**
 * @summary The Leading Root Component Types of CommonObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "label",
        true,
        $.hasTag(_TagClass.universal, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "flags",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "authId",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonObjectAttributes */
/**
 * @summary The Trailing Root Component Types of CommonObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonObjectAttributes */
/**
 * @summary The Extension Addition Component Types of CommonObjectAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userConsent",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessControlRules",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectAttributes */
let _cached_decoder_for_CommonObjectAttributes: $.ASN1Decoder<CommonObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_CommonObjectAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonObjectAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonObjectAttributes} The decoded data structure.
 */
export function _decode_CommonObjectAttributes(el: _Element) {
    if (!_cached_decoder_for_CommonObjectAttributes) {
        _cached_decoder_for_CommonObjectAttributes = function (
            el: _Element
        ): CommonObjectAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let label: OPTIONAL<Label>;
            let flags: OPTIONAL<CommonObjectFlags>;
            let authId: OPTIONAL<Identifier>;
            let userConsent: OPTIONAL<INTEGER>;
            let accessControlRules: OPTIONAL<AccessControlRule[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                label: (_el: _Element): void => {
                    label = _decode_Label(_el);
                },
                flags: (_el: _Element): void => {
                    flags = _decode_CommonObjectFlags(_el);
                },
                authId: (_el: _Element): void => {
                    authId = _decode_Identifier(_el);
                },
                userConsent: (_el: _Element): void => {
                    userConsent = $._decodeInteger(_el);
                },
                accessControlRules: (_el: _Element): void => {
                    accessControlRules = $._decodeSequenceOf<AccessControlRule>(
                        () => _decode_AccessControlRule
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonObjectAttributes,
                _extension_additions_list_spec_for_CommonObjectAttributes,
                _root_component_type_list_2_spec_for_CommonObjectAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonObjectAttributes(
                /* SEQUENCE_CONSTRUCTOR_CALL */ label,
                flags,
                authId,
                userConsent,
                accessControlRules,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonObjectAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectAttributes */
let _cached_encoder_for_CommonObjectAttributes: $.ASN1Encoder<CommonObjectAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonObjectAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_CommonObjectAttributes */
/**
 * @summary Encodes a(n) CommonObjectAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonObjectAttributes, encoded as an ASN.1 Element.
 */
export function _encode_CommonObjectAttributes(
    value: CommonObjectAttributes,
    elGetter: $.ASN1Encoder<CommonObjectAttributes>
) {
    if (!_cached_encoder_for_CommonObjectAttributes) {
        _cached_encoder_for_CommonObjectAttributes = function (
            value: CommonObjectAttributes,
            elGetter: $.ASN1Encoder<CommonObjectAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.label === undefined
                                ? undefined
                                : _encode_Label(value.label, $.BER),
                            /* IF_ABSENT  */ value.flags === undefined
                                ? undefined
                                : _encode_CommonObjectFlags(value.flags, $.BER),
                            /* IF_ABSENT  */ value.authId === undefined
                                ? undefined
                                : _encode_Identifier(value.authId, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.userConsent === undefined
                                ? undefined
                                : $._encodeInteger(value.userConsent, $.BER),
                            /* IF_ABSENT  */ value.accessControlRules ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<AccessControlRule>(
                                      () => _encode_AccessControlRule,
                                      $.BER
                                  )(value.accessControlRules, $.BER),
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
    return _cached_encoder_for_CommonObjectAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonObjectAttributes */

/* eslint-enable */
