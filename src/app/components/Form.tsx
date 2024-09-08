import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Form() {
    return (
        <form className="mx-auto max-w-lg bg-white p-4 lg:mx-0 lg:max-w-none lg:p-8">
                <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
                    <h1 className="text-xl font-bold">Mortgage Calculator</h1>
                    <Button
                        type="reset"
                        className="mt-2 h-0 bg-transparent p-0 py-2 text-sm text-slate-700 underline underline-offset-4 [text-decoration-thickness:2px] hover:bg-transparent hover:text-slate-900 focus-visible:text-slate-900 lg:mt-0"
                    >
                        Clear All
                    </Button>
                </div>
                <div className="mt-6 lg:mt-10">
                    <Label htmlFor="mortgage-amount" className="text-slate-700">
                        <span className="mb-2 block text-xs font-semibold lg:text-sm">
                            Mortgage Amount
                            <span className="sr-only">In pounds</span>
                        </span>
                        <div className='relative mb-5 overflow-hidden rounded-md border border-slate-500 before:absolute before:inset-y-0 before:left-0 before:flex before:place-items-center before:bg-slate-100 before:px-3 before:font-bold before:content-["£"] focus-within:border-black hover:border-black'>
                            <Input
                                id="mortgage-amount"
                                type="number"
                                className="pl-12 font-extrabold"
                            />
                        </div>
                    </Label>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-6">
                        <Label
                            htmlFor="mortgage-term"
                            className="text-slate-700"
                        >
                            <span className="mb-2 block text-xs font-semibold lg:text-sm">
                                Mortgage Term{" "}
                                <span className="sr-only">in years</span>
                            </span>
                            <div className='relative mb-5 overflow-hidden rounded-md border border-slate-500 before:absolute before:inset-y-0 before:right-0 before:flex before:place-items-center before:bg-slate-100 before:px-3 before:font-bold before:content-["years"] focus-within:border-black hover:border-black'>
                                <Input
                                    id="mortgage-term"
                                    type="number"
                                    className="pr-20 font-extrabold"
                                />
                            </div>
                        </Label>
                        <Label
                            htmlFor="interest-rate"
                            className="text-slate-700"
                        >
                            <span className="mb-2 block text-xs font-semibold lg:text-sm">
                                Interest Rate{" "}
                                <span className="sr-only">in percent</span>
                            </span>
                            <div className='relative mb-5 overflow-hidden rounded-md border border-slate-500 before:absolute before:inset-y-0 before:right-0 before:flex before:place-items-center before:bg-slate-100 before:px-3 before:font-bold before:content-["%"] focus-within:border-black hover:border-black'>
                                <Input
                                    id="interest-rate"
                                    type="number"
                                    className="pr-14 font-extrabold"
                                />
                            </div>
                        </Label>
                    </div>

                    <div>
                        <figure>
                            <figcaption className="mb-3 text-xs font-semibold text-slate-700 lg:text-sm">
                                Mortgage Type
                            </figcaption>

                            <ul className="space-y-2">
                                <li>
                                    <Label
                                        htmlFor="type-repayment"
                                        className="flex cursor-pointer items-center rounded-md border border-slate-700 px-4 py-3 font-bold focus-within:border-lime hover:border-lime [&:has(:checked)]:border-lime [&:has(:checked)]:bg-lime [&:has(:checked)]:bg-opacity-20"
                                    >
                                        <Input
                                            type="radio"
                                            id="type-repayment"
                                            name="type"
                                            className="m-0 mr-4 h-4 w-4 p-0 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] after:[background:radial-gradient(closest-side,transparent_80%,black_80%)] checked:after:[background:radial-gradient(closest-side,theme(colors.lime)_40%,transparent_40%_80%,theme(colors.lime)_80%)]"
                                        />
                                        Repayment
                                    </Label>
                                </li>
                                <li>
                                    <Label
                                        htmlFor="type-interest"
                                        className="flex cursor-pointer items-center rounded-md border border-slate-700 px-4 py-3 font-bold focus-within:border-lime hover:border-lime [&:has(:checked)]:border-lime [&:has(:checked)]:bg-lime [&:has(:checked)]:bg-opacity-20"
                                    >
                                        <Input
                                            type="radio"
                                            id="type-interest"
                                            name="type"
                                            className="m-0 mr-4 h-4 w-4 p-0 after:block after:h-4 after:w-4 after:rounded-full after:content-[''] after:[background:radial-gradient(closest-side,transparent_80%,black_80%)] checked:after:[background:radial-gradient(closest-side,theme(colors.lime)_40%,transparent_40%_80%,theme(colors.lime)_80%)]"
                                        />
                                        Interest Only
                                    </Label>
                                </li>
                            </ul>
                        </figure>
                    </div>
                </div>
                <Button className="mb-3 mt-5 flex h-auto w-full items-center gap-x-2 rounded-full bg-lime py-3 font-bold text-slate-900 hover:bg-lime hover:bg-opacity-50 focus-visible:bg-lime focus-visible:bg-opacity-50 lg:mt-8 lg:w-auto lg:px-10 lg:text-base">
                    <Image
                        alt="calculator icon"
                        src="/assets/images/icon-calculator.svg"
                        width="30"
                        height="30"
                    />{" "}
                    <span>Calculate Repayments</span>
                </Button>
            </form>
    )
}