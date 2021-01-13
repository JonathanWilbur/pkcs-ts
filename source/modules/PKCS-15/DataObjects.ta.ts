/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from "../PKCS-15/DataType.ta";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";
export {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from "../PKCS-15/DataType.ta";
export {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta";

/* START_OF_SYMBOL_DEFINITION DataObjects */
/**
 * @summary DataObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataObjects   ::=  PathOrObjects {DataType}
 * ```
 */
export type DataObjects = PathOrObjects<DataType>; // DefinedType
/* END_OF_SYMBOL_DEFINITION DataObjects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataObjects */
let _cached_decoder_for_DataObjects: $.ASN1Decoder<DataObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataObjects */

/* START_OF_SYMBOL_DEFINITION _decode_DataObjects */
/**
 * @summary Decodes an ASN.1 element into a(n) DataObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataObjects} The decoded data structure.
 */
export function _decode_DataObjects(el: _Element) {
    if (!_cached_decoder_for_DataObjects) {
        _cached_decoder_for_DataObjects = _get_decoder_for_PathOrObjects<DataType>(
            _decode_DataType
        );
    }
    return _cached_decoder_for_DataObjects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataObjects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataObjects */
let _cached_encoder_for_DataObjects: $.ASN1Encoder<DataObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataObjects */

/* START_OF_SYMBOL_DEFINITION _encode_DataObjects */
/**
 * @summary Encodes a(n) DataObjects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataObjects, encoded as an ASN.1 Element.
 */
export function _encode_DataObjects(
    value: DataObjects,
    elGetter: $.ASN1Encoder<DataObjects>
) {
    if (!_cached_encoder_for_DataObjects) {
        _cached_encoder_for_DataObjects = _get_encoder_for_PathOrObjects<DataType>(
            _encode_DataType
        );
    }
    return _cached_encoder_for_DataObjects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataObjects */

/* eslint-enable */
