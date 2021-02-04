/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    KeyManagementInfo,
    _decode_KeyManagementInfo,
    _encode_KeyManagementInfo,
} from "../PKCS-15/KeyManagementInfo.ta";
import {
    PKCS15Objects,
    _decode_PKCS15Objects,
    _encode_PKCS15Objects,
} from "../PKCS-15/PKCS15Objects.ta";
import {
    PKCS15Token_version,
    _decode_PKCS15Token_version,
    _encode_PKCS15Token_version,
} from "../PKCS-15/PKCS15Token-version.ta";
export {
    KeyManagementInfo,
    _decode_KeyManagementInfo,
    _encode_KeyManagementInfo,
} from "../PKCS-15/KeyManagementInfo.ta";
export {
    PKCS15Objects,
    _decode_PKCS15Objects,
    _encode_PKCS15Objects,
} from "../PKCS-15/PKCS15Objects.ta";
export {
    PKCS15Token_version,
    PKCS15Token_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PKCS15Token_version,
    _encode_PKCS15Token_version,
} from "../PKCS-15/PKCS15Token-version.ta";

/* START_OF_SYMBOL_DEFINITION PKCS15Token */
/**
 * @summary PKCS15Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Token ::= SEQUENCE {
 *     version INTEGER {v1(0)} (v1,...),
 *     keyManagementInfo [0] KeyManagementInfo OPTIONAL,
 *     pkcs15Objects SEQUENCE OF PKCS15Objects
 * }
 * ```
 *
 * @class
 */
export class PKCS15Token {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: PKCS15Token_version,
        /**
         * @summary `keyManagementInfo`.
         * @public
         * @readonly
         */
        readonly keyManagementInfo: OPTIONAL<KeyManagementInfo>,
        /**
         * @summary `pkcs15Objects`.
         * @public
         * @readonly
         */
        readonly pkcs15Objects: PKCS15Objects[]
    ) {}

    /**
     * @summary Restructures an object into a PKCS15Token
     * @description
     *
     * This takes an `object` and converts it to a `PKCS15Token`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKCS15Token`.
     * @returns {PKCS15Token}
     */
    public static _from_object(
        _o: { [_K in keyof PKCS15Token]: PKCS15Token[_K] }
    ): PKCS15Token {
        return new PKCS15Token(
            _o.version,
            _o.keyManagementInfo,
            _o.pkcs15Objects
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS15Token */
/**
 * @summary The Leading Root Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKCS15Token: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyManagementInfo",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pkcs15Objects",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS15Token */
/**
 * @summary The Trailing Root Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKCS15Token: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS15Token */
/**
 * @summary The Extension Addition Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKCS15Token: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token */
let _cached_decoder_for_PKCS15Token: $.ASN1Decoder<PKCS15Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _decode_PKCS15Token */
/**
 * @summary Decodes an ASN.1 element into a(n) PKCS15Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS15Token} The decoded data structure.
 */
export function _decode_PKCS15Token(el: _Element) {
    if (!_cached_decoder_for_PKCS15Token) {
        _cached_decoder_for_PKCS15Token = function (el: _Element): PKCS15Token {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: PKCS15Token_version;
            let keyManagementInfo: OPTIONAL<KeyManagementInfo>;
            let pkcs15Objects!: PKCS15Objects[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_PKCS15Token_version(_el);
                },
                keyManagementInfo: (_el: _Element): void => {
                    keyManagementInfo = $._decode_implicit<KeyManagementInfo>(
                        () => _decode_KeyManagementInfo
                    )(_el);
                },
                pkcs15Objects: (_el: _Element): void => {
                    pkcs15Objects = $._decodeSequenceOf<PKCS15Objects>(
                        () => _decode_PKCS15Objects
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKCS15Token,
                _extension_additions_list_spec_for_PKCS15Token,
                _root_component_type_list_2_spec_for_PKCS15Token,
                undefined
            );
            return new PKCS15Token(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                keyManagementInfo,
                pkcs15Objects
            );
        };
    }
    return _cached_decoder_for_PKCS15Token(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token */
let _cached_encoder_for_PKCS15Token: $.ASN1Encoder<PKCS15Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKCS15Token */

/* START_OF_SYMBOL_DEFINITION _encode_PKCS15Token */
/**
 * @summary Encodes a(n) PKCS15Token into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS15Token, encoded as an ASN.1 Element.
 */
export function _encode_PKCS15Token(
    value: PKCS15Token,
    elGetter: $.ASN1Encoder<PKCS15Token>
) {
    if (!_cached_encoder_for_PKCS15Token) {
        _cached_encoder_for_PKCS15Token = function (
            value: PKCS15Token,
            elGetter: $.ASN1Encoder<PKCS15Token>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKCS15Token_version(
                            value.version,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyManagementInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_KeyManagementInfo,
                                  $.BER
                              )(value.keyManagementInfo, $.BER),
                        /* REQUIRED   */ $._encodeSequenceOf<PKCS15Objects>(
                            () => _encode_PKCS15Objects,
                            $.BER
                        )(value.pkcs15Objects, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PKCS15Token(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKCS15Token */

/* eslint-enable */
