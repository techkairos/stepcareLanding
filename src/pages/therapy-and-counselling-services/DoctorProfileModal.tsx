import React from "react";

const DoctorProfileModal = ({ doctor, closeModal, scrollTarget }) => {
  const handleBookAppointment = (e) => {
    e.preventDefault();

    closeModal();

    setTimeout(() => {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/45 p-3 sm:p-4">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[24px] bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between border-b px-4 py-2 sm:px-6">
            <div className="min-w-0">
              <h2 className="truncate text-lg sm:text-1xl font-bold text-gray-900">
                {doctor.name}
              </h2>
            </div>

            <button
              className="ml-4 text-2xl font-bold leading-none text-gray-500 hover:text-black"
              onClick={closeModal}
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
              <div>
                <div className="overflow-hidden rounded-[22px] bg-[#00B4CC]/5">
                  <img
                    key={doctor.image}
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-[260px] w-full object-cover object-top sm:h-[340px] lg:h-[380px]"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-gray-500">
                        {doctor.exp}+ years experience
                      </span>

                      {doctor.speaks && (
                        <span className="inline-flex items-center rounded-full bg-[#00B4CC]/10 px-2.5 py-1 text-xs font-semibold text-[#008CA1]">
                          {doctor.speaks}
                        </span>
                      )}

                      {doctor.interval && (
                        <span className="inline-flex items-center rounded-full bg-[#A4D65E]/10 px-2.5 py-1 text-xs font-semibold text-[#6C9E28]">
                          {doctor.interval} consultation
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-[#00B4CC]/20 bg-gradient-to-r from-[#00B4CC]/10 to-[#A4D65E]/10 px-4 py-2.5 shadow-sm">
                      <span className="text-2xl font-bold leading-none text-gray-900">
                        ₹ {doctor.price}
                      </span>
                      <span className="text-sm text-gray-600 whitespace-nowrap">
                        per consultation
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="mb-3 text-base font-bold text-gray-900">
                  About the Doctor
                </h3>

                <div className="space-y-4 text-[14px] sm:text-[15px] leading-8 text-gray-700">
                  {doctor.contact}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t bg-white px-4 py-4 sm:px-6">
            <a
              href={`#${scrollTarget}`}
              onClick={handleBookAppointment}
              className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#00B4CC] to-[#A4D65E] px-4 py-3.5 text-center text-base font-bold text-white shadow-lg hover:opacity-95"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileModal;