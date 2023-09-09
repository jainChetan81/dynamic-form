import formTemplate from "@/data/form_template"
import { ClientFormBuilder } from "./components/client"
import { StoreProvider } from "../src/context/RefContext"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StoreProvider data={formTemplate}>
        <h1>Form</h1>
        <ClientFormBuilder />
      </StoreProvider>
    </main>
  )
}
