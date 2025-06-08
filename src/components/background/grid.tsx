export default function Grid() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
            <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_3px,transparent_3px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_3px,transparent_3px)] bg-[size:100px_100px]" />
        </div>
    );
}