"use client"
import { useStore } from "@/context/RefContext"
import { ServerFormSection, ServerFormQuestion } from "./server"

export const ClientFormBuilder = () => {
    const [totalSections] = useStore((store) => (store?.formSections?.length ?? 0))
    const [header] = useStore((store) => store?.formTitle ?? "")
    return (
        <>
            <h1 className="text-center">{header}</h1>
            {Array.from({ length: totalSections }).map((_, idx) => (
                <ClientFormSectionHeader key={idx} sectionIdx={idx} />
            ))}
        </>)
}

const ClientFormSectionHeader = ({ sectionIdx }: { sectionIdx: number; }) => {
    const [currentSection] = useStore((store) => store?.formSections[sectionIdx])
    if (!currentSection) return <></>
    return <ServerFormSection section={currentSection}>
        {currentSection.formQuestions.map((question) => (
            <ServerFormQuestion key={question.questionID} question={question} />
        ))}
    </ServerFormSection>
}