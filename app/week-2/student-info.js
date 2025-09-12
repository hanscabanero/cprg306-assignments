import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div class = "border-amber-600 border-2">
            <h2>
            Hans Cabanero
            Sean Lee
            Noah Frank
            </h2>
            <p>
                Example GitHub Repo:{' '}
                <Link href="https://github.com/hanscabanero/cprg306-assignments" target="_blank" rel="noopener noreferrer">
                    https://github.com/hanscabanero/cprg306-assignments
                </Link>
            </p>
        </div>
    );
}

