/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OtherPrimeInfos,
    _decode_OtherPrimeInfos,
    _encode_OtherPrimeInfos,
} from "../PKCS-1/OtherPrimeInfos.ta";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "../PKCS-1/Version.ta";
export {
    OtherPrimeInfos,
    _decode_OtherPrimeInfos,
    _encode_OtherPrimeInfos,
} from "../PKCS-1/OtherPrimeInfos.ta";
export {
    multi /* IMPORTED_SHORT_NAMED_INTEGER */,
    two_prime /* IMPORTED_SHORT_NAMED_INTEGER */,
    Version,
    Version_multi /* IMPORTED_LONG_NAMED_INTEGER */,
    Version_two_prime /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
} from "../PKCS-1/Version.ta";

/* START_OF_SYMBOL_DEFINITION RSAPrivateKey */
/**
 * @summary RSAPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAPrivateKey ::= SEQUENCE {
 *     version           Version,
 *     modulus           INTEGER,  -- n
 *     publicExponent    INTEGER,  -- e
 *     privateExponent   INTEGER,  -- d
 *     prime1            INTEGER,  -- p
 *     prime2            INTEGER,  -- q
 *     exponent1         INTEGER,  -- d mod (p-1)
 *     exponent2         INTEGER,  -- d mod (q-1)
 *     coefficient       INTEGER,  -- (inverse of q) mod p
 *     otherPrimeInfos   OtherPrimeInfos OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RSAPrivateKey {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
        /**
         * @summary `modulus`.
         * @public
         * @readonly
         */
        readonly modulus: OCTET_STRING,
        /**
         * @summary `publicExponent`.
         * @public
         * @readonly
         */
        readonly publicExponent: OCTET_STRING,
        /**
         * @summary `privateExponent`.
         * @public
         * @readonly
         */
        readonly privateExponent: OCTET_STRING,
        /**
         * @summary `prime1`.
         * @public
         * @readonly
         */
        readonly prime1: OCTET_STRING,
        /**
         * @summary `prime2`.
         * @public
         * @readonly
         */
        readonly prime2: OCTET_STRING,
        /**
         * @summary `exponent1`.
         * @public
         * @readonly
         */
        readonly exponent1: OCTET_STRING,
        /**
         * @summary `exponent2`.
         * @public
         * @readonly
         */
        readonly exponent2: OCTET_STRING,
        /**
         * @summary `coefficient`.
         * @public
         * @readonly
         */
        readonly coefficient: OCTET_STRING,
        /**
         * @summary `otherPrimeInfos`.
         * @public
         * @readonly
         */
        readonly otherPrimeInfos: OPTIONAL<OtherPrimeInfos>
    ) {}

    /**
     * @summary Restructures an object into a RSAPrivateKey
     * @description
     *
     * This takes an `object` and converts it to a `RSAPrivateKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSAPrivateKey`.
     * @returns {RSAPrivateKey}
     */
    public static _from_object(
        _o: { [_K in keyof RSAPrivateKey]: RSAPrivateKey[_K] }
    ): RSAPrivateKey {
        return new RSAPrivateKey(
            _o.version,
            _o.modulus,
            _o.publicExponent,
            _o.privateExponent,
            _o.prime1,
            _o.prime2,
            _o.exponent1,
            _o.exponent2,
            _o.coefficient,
            _o.otherPrimeInfos
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPrivateKey */
/**
 * @summary The Leading Root Component Types of RSAPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSAPrivateKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "modulus",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicExponent",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privateExponent",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prime1",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "prime2",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exponent1",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "exponent2",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "coefficient",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "otherPrimeInfos",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPrivateKey */
/**
 * @summary The Trailing Root Component Types of RSAPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSAPrivateKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPrivateKey */
/**
 * @summary The Extension Addition Component Types of RSAPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSAPrivateKey: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPrivateKey */
let _cached_decoder_for_RSAPrivateKey: $.ASN1Decoder<RSAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _decode_RSAPrivateKey */
/**
 * @summary Decodes an ASN.1 element into a(n) RSAPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAPrivateKey} The decoded data structure.
 */
export function _decode_RSAPrivateKey(el: _Element) {
    if (!_cached_decoder_for_RSAPrivateKey) {
        _cached_decoder_for_RSAPrivateKey = function (
            el: _Element
        ): RSAPrivateKey {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: Version;
            let modulus!: OCTET_STRING;
            let publicExponent!: OCTET_STRING;
            let privateExponent!: OCTET_STRING;
            let prime1!: OCTET_STRING;
            let prime2!: OCTET_STRING;
            let exponent1!: OCTET_STRING;
            let exponent2!: OCTET_STRING;
            let coefficient!: OCTET_STRING;
            let otherPrimeInfos: OPTIONAL<OtherPrimeInfos>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                modulus: (_el: _Element): void => {
                    modulus = $._decodeBigInt(_el);
                },
                publicExponent: (_el: _Element): void => {
                    publicExponent = $._decodeBigInt(_el);
                },
                privateExponent: (_el: _Element): void => {
                    privateExponent = $._decodeBigInt(_el);
                },
                prime1: (_el: _Element): void => {
                    prime1 = $._decodeBigInt(_el);
                },
                prime2: (_el: _Element): void => {
                    prime2 = $._decodeBigInt(_el);
                },
                exponent1: (_el: _Element): void => {
                    exponent1 = $._decodeBigInt(_el);
                },
                exponent2: (_el: _Element): void => {
                    exponent2 = $._decodeBigInt(_el);
                },
                coefficient: (_el: _Element): void => {
                    coefficient = $._decodeBigInt(_el);
                },
                otherPrimeInfos: (_el: _Element): void => {
                    otherPrimeInfos = _decode_OtherPrimeInfos(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSAPrivateKey,
                _extension_additions_list_spec_for_RSAPrivateKey,
                _root_component_type_list_2_spec_for_RSAPrivateKey,
                undefined
            );
            return new RSAPrivateKey(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                modulus,
                publicExponent,
                privateExponent,
                prime1,
                prime2,
                exponent1,
                exponent2,
                coefficient,
                otherPrimeInfos
            );
        };
    }
    return _cached_decoder_for_RSAPrivateKey(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPrivateKey */
let _cached_encoder_for_RSAPrivateKey: $.ASN1Encoder<RSAPrivateKey> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RSAPrivateKey */

/* START_OF_SYMBOL_DEFINITION _encode_RSAPrivateKey */
/**
 * @summary Encodes a(n) RSAPrivateKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAPrivateKey, encoded as an ASN.1 Element.
 */
export function _encode_RSAPrivateKey(
    value: RSAPrivateKey,
    elGetter: $.ASN1Encoder<RSAPrivateKey>
) {
    if (!_cached_encoder_for_RSAPrivateKey) {
        _cached_encoder_for_RSAPrivateKey = function (
            value: RSAPrivateKey,
            elGetter: $.ASN1Encoder<RSAPrivateKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(value.modulus, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.publicExponent,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.privateExponent,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(value.prime1, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(value.prime2, $.BER),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.exponent1,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.exponent2,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.coefficient,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.otherPrimeInfos === undefined
                            ? undefined
                            : _encode_OtherPrimeInfos(
                                  value.otherPrimeInfos,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSAPrivateKey(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RSAPrivateKey */

/* eslint-enable */
