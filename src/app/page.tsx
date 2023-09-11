import formTemplate from "@/data/form_template"
import { ClientFormBuilder } from "./components/client"
import { StoreProvider } from "../context/RefContext"

export default function Home() {
  return (
    <main className=" px-[100px] py-16">
      <StoreProvider data={formTemplate}>
        <ClientFormBuilder />
      </StoreProvider>
    </main>
  )
}
