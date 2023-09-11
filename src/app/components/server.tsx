import { type Z_Form } from '@/@types'
import ThreeDot from '@/icons/ThreeDot'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@ui/menubar'
import { type ReactNode } from 'react'

export const ServerFormSection = ({ section, children }: { section: Prettify<Z_Form["formSections"][number]>, children: ReactNode }) => {
    return (
        <section className=' w-[768px] mx-auto p-3 relative rounded-md border-t-border  border-t-8 bg-card text-card-foreground mt-8' >
            <div className='absolute top-[-40px] left-0 py-2 px-3 bg-border rounded-tl-sm rounded-tr-sm font-semibold text-sm'>Section 1</div>
            <div className='flex items-center gap-4 mb-4'>
                <h2 className='w-full border-b-2 border-border pb-2'>{section.sectionTitle}</h2>
                <Menubar className='w-[40px] ml-auto p-0 border-none'>
                    <MenubarMenu>
                        <MenubarTrigger className='cursor-pointer'>
                            <ThreeDot /></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem><button>Duplicate Section</button></MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem><button>Delete Section</button></MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <p className='border-b-2 border-border pb-2 mb-4'>{section.sectionDesc}</p>
            {children}
        </section>
    )
}


export const ServerFormQuestion = ({ question }: { question: Prettify<Z_Form["formSections"][number]["formQuestions"][number]> }) => {
    return (
        <div className='flex items-center gap-4 mb-4'>
            <h3 className='w-full border-b-2 border-border pb-2'>{question.question}</h3>
            <Menubar className='w-[40px] ml-auto p-0 border-none'>
                <MenubarMenu>
                    <MenubarTrigger className='cursor-pointer'>
                        <ThreeDot /></MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem><button>Duplicate Question</button></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem><button>Delete Question</button></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}