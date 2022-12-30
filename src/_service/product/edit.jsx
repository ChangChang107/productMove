import React from 'react'

export default function EditServiceProduct() {
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
                    <option selected>Mới sản xuất</option>
                    <option value="2">Đưa về đại lý</option>
                    <option value="3">Đã bán</option>
                    <option value="4">Lỗi cần bảo hành</option>
                    <option value="5">Đang bảo hành</option>
                    <option value="6">Đã bảo hành xong</option>
                    <option value="7">Lỗi cần trả về nhà máy</option>
                    <option value="8">Lỗi đã đưa về cơ sở sản xuất</option>
                    <option value="9">Lỗi cần triệu hồi</option>
                    <option value="10">Hết thời gian bảo hành</option>
                    <option value="11">Trả lại cơ sở sản xuất</option>
                    <option value="12">Đã bảo hành xong trả lại cho khách hàng</option>
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
