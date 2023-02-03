type Brand<K, T> = K & { _brand: T }

interface MajorCredits {
    credits: Brand<number, 'Majors'>;
}

interface MinorCredits {
    credits: Brand<number, 'Minors'>;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return subject1 + subject2;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return subject1 + subject2;
}
