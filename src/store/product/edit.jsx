import React from 'react'

export default function EditStoreProduct() {
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="type"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Type
                </label>
                <input
                type="text"
                name="type"
                id="type"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="color"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Color
                </label>
                <input
                type="text"
                name="color"
                id="color"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="weight"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Weight
                </label>
                <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Enter Weight"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="height"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Height
                </label>
                <input
                type="number"
                name="height"
                id="height"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="expiry"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Expiry
                </label>
                <input
                type="number"
                name="expiry"
                id="expiry"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="status"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Status
                </label>
                <select
                type="number"
                name="status"
                id="status"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                >
                    <option selected>M???i s???n xu???t</option>
                    <option value="2">????a v??? ?????i l??</option>
                    <option value="3">???? b??n</option>
                    <option value="4">L???i c???n b???o h??nh</option>
                    <option value="5">??ang b???o h??nh</option>
                    <option value="6">???? b???o h??nh xong</option>
                    <option value="7">L???i c???n tr??? v??? nh?? m??y</option>
                    <option value="8">L???i ???? ????a v??? c?? s??? s???n xu???t</option>
                    <option value="9">L???i c???n tri???u h???i</option>
                    <option value="10">H???t th???i gian b???o h??nh</option>
                    <option value="11">Tr??? l???i c?? s??? s???n xu???t</option>
                    <option value="12">???? b???o h??nh xong tr??? l???i cho kh??ch h??ng</option>
                </select>
            </div>
            <div class="mb-5">
                <label
                for="amount"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Amount
                </label>
                <input
                type="number"
                name="amount"
                id="amount"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div>
                <button
                class="mr-5 mt-5 mb-5 hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                Create
                </button>
            </div>
        </form>
    </div>
  )
}
