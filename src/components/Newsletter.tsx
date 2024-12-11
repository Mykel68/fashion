import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
    return (
        <section className="bg-[#F9D54C] py-24 px-4">
            <div className="container mx-auto text-center max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-balance">
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h2>
                <p className="text-white mb-8">
                    Type your email down below and be young wild generation
                </p>
                <div className="flex max-w-md mx-auto gap-2">
                    <Input
                        type="email"
                        placeholder="Add your email here"
                        className="bg-white text-black placeholder:text-gray-500"
                    />
                    <Button
                        type="submit"
                        className="bg-black text-white hover:bg-gray-800 px-8"
                    >
                        SEND
                    </Button>
                </div>
            </div>
        </section>
    )
}

