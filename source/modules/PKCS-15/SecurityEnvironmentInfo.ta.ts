/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SecurityEnvironmentInfo */
/**
 * @summary SecurityEnvironmentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityEnvironmentInfo ::= SEQUENCE {
 *     se INTEGER (0..pkcs15-ub-seInfo),
 *     owner OBJECT IDENTIFIER,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @class
 */
export class SecurityEnvironmentInfo {
    constructor(
        /**
         * @summary `se`.
         * @public
         * @readonly
         */
        readonly se: INTEGER,
        /**
         * @summary `owner`.
         * @public
         * @readonly
         */
        readonly owner: OBJECT_IDENTIFIER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SecurityEnvironmentInfo
     * @description
     *
     * This takes an `object` and converts it to a `SecurityEnvironmentInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityEnvironmentInfo`.
     * @returns {SecurityEnvironmentInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof SecurityEnvironmentInfo]: SecurityEnvironmentInfo[_K];
        }
    ): SecurityEnvironmentInfo {
        return new SecurityEnvironmentInfo(
            _o.se,
            _o.owner,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityEnvironmentInfo */
/**
 * @summary The Leading Root Component Types of SecurityEnvironmentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "se",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "owner",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityEnvironmentInfo */
/**
 * @summary The Trailing Root Component Types of SecurityEnvironmentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityEnvironmentInfo */
/**
 * @summary The Extension Addition Component Types of SecurityEnvironmentInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityEnvironmentInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEnvironmentInfo */
let _cached_decoder_for_SecurityEnvironmentInfo: $.ASN1Decoder<SecurityEnvironmentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityEnvironmentInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityEnvironmentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityEnvironmentInfo} The decoded data structure.
 */
export function _decode_SecurityEnvironmentInfo(el: _Element) {
    if (!_cached_decoder_for_SecurityEnvironmentInfo) {
        _cached_decoder_for_SecurityEnvironmentInfo = function (
            el: _Element
        ): SecurityEnvironmentInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SecurityEnvironmentInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "se";
            sequence[1].name = "owner";
            let se!: INTEGER;
            let owner!: OBJECT_IDENTIFIER;
            se = $._decodeInteger(sequence[0]);
            owner = $._decodeObjectIdentifier(sequence[1]);
            return new SecurityEnvironmentInfo(se, owner, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SecurityEnvironmentInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEnvironmentInfo */
let _cached_encoder_for_SecurityEnvironmentInfo: $.ASN1Encoder<SecurityEnvironmentInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEnvironmentInfo */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityEnvironmentInfo */
/**
 * @summary Encodes a(n) SecurityEnvironmentInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityEnvironmentInfo, encoded as an ASN.1 Element.
 */
export function _encode_SecurityEnvironmentInfo(
    value: SecurityEnvironmentInfo,
    elGetter: $.ASN1Encoder<SecurityEnvironmentInfo>
) {
    if (!_cached_encoder_for_SecurityEnvironmentInfo) {
        _cached_encoder_for_SecurityEnvironmentInfo = function (
            value: SecurityEnvironmentInfo,
            elGetter: $.ASN1Encoder<SecurityEnvironmentInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.se, $.BER),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.owner,
                                $.BER
                            ),
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
    return _cached_encoder_for_SecurityEnvironmentInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityEnvironmentInfo */

/* eslint-enable */
