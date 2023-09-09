"use client"
import { useStore } from "@/context/RefContext"

export const ClientFormBuilder = () => {
    const [totalSections] = useStore((store) => (store?.formSections?.length ?? 0))
    return (
        <div>
            {Array.from({ length: totalSections }).map((_, idx) => (
                <ClientFormSectionHeader key={idx} sectionIdx={idx} />
            ))}
        </div>)
}

const ClientFormSectionHeader = ({ sectionIdx }: { sectionIdx: number; }) => {
    const [currentSection] = useStore((store) => store?.formSections[sectionIdx])
    if (!currentSection) return <></>
    return <div>{currentSection.sectionTitle}</div>
}