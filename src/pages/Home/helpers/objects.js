/**
 * Helper functions for working with Objects
 * File: objects.js
 */

// So sánh sâu hai object
export const deepEqual = (obj1, obj2) => {
    // Kiểm tra tham chiếu giống nhau
    if (obj1 === obj2) return true;

    // Kiểm tra null hoặc undefined
    if (obj1 == null || obj2 == null) return obj1 === obj2;

    // Kiểm tra kiểu dữ liệu
    if (typeof obj1 !== typeof obj2) return false;

    // Kiểm tra các kiểu dữ liệu primitive
    if (typeof obj1 !== "object") return obj1 === obj2;

    // Kiểm tra Array
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }

    // Kiểm tra Object
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
};

// Sao chép sâu object
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;

    // Xử lý Date
    if (obj instanceof Date) return new Date(obj.getTime());

    // Xử lý Array
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    // Xử lý Object
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
};

// Merge sâu các object
export const deepMerge = (...objects) => {
    if (objects.length === 0) return {};
    if (objects.length === 1) return deepClone(objects[0]);

    const result = {};

    objects.forEach((obj) => {
        if (obj && typeof obj === "object" && !Array.isArray(obj)) {
            Object.keys(obj).forEach((key) => {
                if (
                    result[key] &&
                    typeof result[key] === "object" &&
                    typeof obj[key] === "object" &&
                    !Array.isArray(result[key]) &&
                    !Array.isArray(obj[key])
                ) {
                    result[key] = deepMerge(result[key], obj[key]);
                } else {
                    result[key] = deepClone(obj[key]);
                }
            });
        }
    });

    return result;
};

// Lấy giá trị theo đường dẫn (path)
export const getValueByPath = (obj, path, defaultValue = undefined) => {
    if (!obj || typeof obj !== "object") return defaultValue;

    const keys = Array.isArray(path) ? path : path.split(".");
    let current = obj;

    for (let key of keys) {
        if (current === null || current === undefined || !(key in current)) {
            return defaultValue;
        }
        current = current[key];
    }

    return current;
};

// Set giá trị theo đường dẫn (path)
export const setValueByPath = (obj, path, value) => {
    if (!obj || typeof obj !== "object") return obj;

    const keys = Array.isArray(path) ? path : path.split(".");
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!(key in current) || typeof current[key] !== "object") {
            current[key] = {};
        }
        current = current[key];
    }

    current[keys[keys.length - 1]] = value;
    return obj;
};

// Loại bỏ các thuộc tính có giá trị null, undefined hoặc empty
export const removeEmpty = (
    obj,
    removeEmptyString = false,
    removeEmptyArray = false
) => {
    if (Array.isArray(obj)) {
        const filtered = obj
            .map((item) =>
                removeEmpty(item, removeEmptyString, removeEmptyArray)
            )
            .filter((item) => {
                if (item === null || item === undefined) return false;
                if (removeEmptyString && item === "") return false;
                if (
                    removeEmptyArray &&
                    Array.isArray(item) &&
                    item.length === 0
                )
                    return false;
                return true;
            });
        return filtered;
    }

    if (obj && typeof obj === "object") {
        const cleaned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = removeEmpty(
                    obj[key],
                    removeEmptyString,
                    removeEmptyArray
                );
                if (value !== null && value !== undefined) {
                    if (removeEmptyString && value === "") continue;
                    if (
                        removeEmptyArray &&
                        Array.isArray(value) &&
                        value.length === 0
                    )
                        continue;
                    if (
                        typeof value === "object" &&
                        !Array.isArray(value) &&
                        Object.keys(value).length === 0
                    )
                        continue;
                    cleaned[key] = value;
                }
            }
        }
        return cleaned;
    }

    return obj;
};

// Làm phẳng object nested
export const flattenObject = (obj, separator = ".", prefix = "") => {
    const flattened = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = prefix ? `${prefix}${separator}${key}` : key;

            if (
                obj[key] &&
                typeof obj[key] === "object" &&
                !Array.isArray(obj[key])
            ) {
                Object.assign(
                    flattened,
                    flattenObject(obj[key], separator, newKey)
                );
            } else {
                flattened[newKey] = obj[key];
            }
        }
    }

    return flattened;
};

// Chuyển object phẳng thành nested
export const unflattenObject = (obj, separator = ".") => {
    const result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            setValueByPath(result, key.split(separator), obj[key]);
        }
    }

    return result;
};

// Lọc object theo điều kiện
export const filterObject = (obj, predicate) => {
    const filtered = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key, obj)) {
            filtered[key] = obj[key];
        }
    }

    return filtered;
};

// Map object (tương tự Array.map)
export const mapObject = (obj, mapper) => {
    const mapped = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            mapped[key] = mapper(obj[key], key, obj);
        }
    }

    return mapped;
};

// Pick một số thuộc tính từ object
export const pick = (obj, keys) => {
    const picked = {};
    keys.forEach((key) => {
        if (key in obj) {
            picked[key] = obj[key];
        }
    });
    return picked;
};

// Omit một số thuộc tính từ object
export const omit = (obj, keys) => {
    const omitted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !keys.includes(key)) {
            omitted[key] = obj[key];
        }
    }
    return omitted;
};

// Kiểm tra object rỗng
export const isEmpty = (obj) => {
    if (obj === null || obj === undefined) return true;
    if (Array.isArray(obj)) return obj.length === 0;
    if (typeof obj === "object") return Object.keys(obj).length === 0;
    return false;
};

// Đếm số lượng thuộc tính (bao gồm nested)
export const countProperties = (obj) => {
    if (!obj || typeof obj !== "object") return 0;

    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
            if (
                typeof obj[key] === "object" &&
                obj[key] !== null &&
                !Array.isArray(obj[key])
            ) {
                count += countProperties(obj[key]);
            }
        }
    }
    return count;
};
