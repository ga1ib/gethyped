import knltb       from '../assets/svg/6849d81e72e08110e3fd1a17_knltb.svg'
import srhk        from '../assets/svg/6849d838fc5735f090bd9843_SRHK.svg'
import fides       from '../assets/svg/6849d85341bf0d7476e56a8c_fides.svg'
import graafschap  from '../assets/svg/6849d86cd6ba384af3c14e58_graafschap-college.svg'
import seesing     from '../assets/svg/6849d880bed5996600cbc586_seesing-flex.svg'
import salontopper from '../assets/svg/6849d88f755388cc2c74ecff_salontopper.svg'
import tho         from '../assets/svg/684b062ebc242028ca4b3ea1_tho.svg'
import talententuin from '../assets/svg/684c05642bf8f5cea7384403_de-talententuin.svg'
import morssinkhof from '../assets/svg/68c194e6d1b186563459b107_morssinkhof.svg'
import zclv        from '../assets/svg/68c1952f22281ee50d3620b5_zclv.svg'
import bullit      from '../assets/svg/69241146b4df63c4ca966552_Bullit Digital.svg'

const LOGOS = [
  { src: bullit,       alt: 'Bullit Digital'    },
  { src: morssinkhof,  alt: 'Morssinkhof'       },
  { src: salontopper,  alt: 'Salontopper'       },
  { src: seesing,      alt: 'Seesing Flex'      },
  { src: graafschap,   alt: 'Graafschap College'},
  { src: fides,        alt: 'Fides'             },
  { src: tho,          alt: 'THO'               },
  { src: talententuin, alt: 'De Talententuin'   },
  { src: knltb,        alt: 'KNLTB'             },
  { src: srhk,         alt: 'SRHK'              },
  { src: zclv,         alt: 'ZCLV'              },
]

export default function ClientMarquee() {
  /* Duplicate array for seamless loop */
  const all = [...LOGOS, ...LOGOS]

  return (
    <section className="py-20 px-[5vw] bg-[#FAF4EC] overflow-hidden">
      <div className="w-full mx-auto mb-12">
        <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] text-left font-bold text-black">
          These brands<br className="hidden sm:block md:hidden" /> got hyped.
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 md:gap-5 lg:gap-10 animate-marquee w-max">
          {all.map(({ src, alt }, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center">
              <div className="
                w-40 h-40 sm:w-40 sm:h-48 md:w-48 md:h-48 lg:w-80 lg:h-80
                bg-white rounded-2xl shadow-md hover:shadow-xl 
                transition-all duration-300 flex items-center justify-center
                hover:scale-105 cursor-pointer
              ">
                <img
                  src={src}
                  alt={alt}
                  className="w-20 h-20 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-64 lg:h-64 
                             object-contain p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}