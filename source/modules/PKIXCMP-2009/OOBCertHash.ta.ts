/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    CertId,
    _decode_CertId,
    _encode_CertId,
} from "../PKIXCRMF-2009/CertId.ta";


/* START_OF_SYMBOL_DEFINITION OOBCertHash */
/**
 * @summary OOBCertHash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OOBCertHash ::= SEQUENCE {
 *     hashAlg     [0] AlgorithmIdentifier{DIGEST-ALGORITHM, {...}}
 *                         OPTIONAL,
 *     certId      [1] CertId                  OPTIONAL,
 *     hashVal         BIT STRING
 *     -- hashVal is calculated over the DER encoding of the
 *     -- self-signed certificate with the identifier certID.
 * }
 * ```
 *
 * @class
 */
export class OOBCertHash {
    constructor(
        /**
         * @summary `hashAlg`.
         * @public
         * @readonly
         */
        readonly hashAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `certId`.
         * @public
         * @readonly
         */
        readonly certId: OPTIONAL<CertId>,
        /**
         * @summary `hashVal`.
         * @public
         * @readonly
         */
        readonly hashVal: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a OOBCertHash
     * @description
     *
     * This takes an `object` and converts it to a `OOBCertHash`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OOBCertHash`.
     * @returns {OOBCertHash}
     */
    public static _from_object(
        _o: { [_K in keyof OOBCertHash]: OOBCertHash[_K] }
    ): OOBCertHash {
        return new OOBCertHash(_o.hashAlg, _o.certId, _o.hashVal);
    }
}
/* END_OF_SYMBOL_DEFINITION OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OOBCertHash */
/**
 * @summary The Leading Root Component Types of OOBCertHash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OOBCertHash: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlg",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certId",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hashVal",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OOBCertHash */
/**
 * @summary The Trailing Root Component Types of OOBCertHash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OOBCertHash: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OOBCertHash */
/**
 * @summary The Extension Addition Component Types of OOBCertHash
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OOBCertHash: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OOBCertHash */
let _cached_decoder_for_OOBCertHash: $.ASN1Decoder<OOBCertHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _decode_OOBCertHash */
/**
 * @summary Decodes an ASN.1 element into a(n) OOBCertHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OOBCertHash} The decoded data structure.
 */
export function _decode_OOBCertHash(el: _Element) {
    if (!_cached_decoder_for_OOBCertHash) {
        _cached_decoder_for_OOBCertHash = function (el: _Element): OOBCertHash {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlg: OPTIONAL<AlgorithmIdentifier>;
            let certId: OPTIONAL<CertId>;
            let hashVal!: BIT_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                hashAlg: (_el: _Element): void => {
                    hashAlg = $._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                certId: (_el: _Element): void => {
                    certId = $._decode_explicit<CertId>(() => _decode_CertId)(
                        _el
                    );
                },
                hashVal: (_el: _Element): void => {
                    hashVal = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OOBCertHash,
                _extension_additions_list_spec_for_OOBCertHash,
                _root_component_type_list_2_spec_for_OOBCertHash,
                undefined
            );
            return new OOBCertHash /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlg,
                certId,
                hashVal
            );
        };
    }
    return _cached_decoder_for_OOBCertHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OOBCertHash */
let _cached_encoder_for_OOBCertHash: $.ASN1Encoder<OOBCertHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OOBCertHash */

/* START_OF_SYMBOL_DEFINITION _encode_OOBCertHash */
/**
 * @summary Encodes a(n) OOBCertHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OOBCertHash, encoded as an ASN.1 Element.
 */
export function _encode_OOBCertHash(
    value: OOBCertHash,
    elGetter: $.ASN1Encoder<OOBCertHash>
) {
    if (!_cached_encoder_for_OOBCertHash) {
        _cached_encoder_for_OOBCertHash = function (
            value: OOBCertHash,
            elGetter: $.ASN1Encoder<OOBCertHash>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.hashAlg === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  $.BER
                              )(value.hashAlg, $.BER),
                        /* IF_ABSENT  */ value.certId === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertId,
                                  $.BER
                              )(value.certId, $.BER),
                        /* REQUIRED   */ $._encodeBitString(
                            value.hashVal,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OOBCertHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OOBCertHash */

/* eslint-enable */
