import React from 'react'

export default function EditUser() {
  return (
    <div class="mx-auto w-full max-w-[550px]">
        <form method="POST">
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Name
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Email
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Password
                </label>
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="phone"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Phone
                </label>
                <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter Phone"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="address"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Address
                </label>
                <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Address"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div>
                <button
                class="mr-5 mt-5 mb-5 hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-green-700 focus:outline-none focus:ring-2 focus:bg-green-600 focus:ring-offset-1"
                >
                Edit
                </button>
                <button
                class="m-5 hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-red-700 focus:outline-none focus:ring-2 focus:bg-red-600 focus:ring-offset-1"
                >
                Delete
                </button>
            </div>
        </form>
    </div>
  )
}
