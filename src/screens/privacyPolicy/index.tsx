import React, { useEffect, useLayoutEffect, useState } from 'react'
import { RenderMarkdown } from 'organisms'
import { useLocation } from 'react-router-dom'

function PageElem({
  text,
  active,
  href,
  handleBtnClick,
}: {
  href: string
  text: string
  active: string
  handleBtnClick: (hash: string) => void
}) {
  return (
    <button
      onClick={() => handleBtnClick(href)}
      className={` ${
        active === href ? 'font-medium  underline' : 'font-regular'
      }  text-sm md:text-base text-left hover:underline underline-offset-2 cursor-pointer lg:text-lg`}
    >
      {text}
    </button>
  )
}
export default function PrivacyPolicy() {
  const [active, setActive] = useState('')
  const location = useLocation()

  const formattedSections = [
    { value: 'overview', label: 'Overview' },
    { value: 'user-acceptance', label: 'User Acceptance' },
    { value: 'collected-info', label: 'Information we collect' },
    { value: 'acceptance-of-terms', label: 'Acceptance of Terms' },
    { value: 'use-of-info', label: 'Use of Your Information' },
    { value: 'sharing-of-info', label: 'Sharing of Your Information' },
    { value: 'third-party-policies', label: 'Third-Party Policies' },
    { value: 'security-practices', label: 'Our Security Practices' },
    { value: 'info-storage', label: 'Information Storage & retention' },
    { value: 'restriction-of-use', label: 'Restriction of Use' },
    { value: 'standard-of-handling', label: 'Standard of Handling' },
    { value: 'withdrawal-of-consent', label: 'Withdrawal of Consent' },
    { value: 'child-info', label: 'Info of Child' },
    { value: 'modifications', label: 'Modifications' },
    { value: 'cookies', label: 'Cookies' },
  ]
  const handleBtnClick = (hash: string) => {
    moveToCenter(hash)
  }
  const moveToCenter = (hash: string) => {
    if (hash) {
      setActive(hash)
      const element = document.getElementById(hash)
      if (element) {
        const offset = window.innerHeight / 2 - element.offsetHeight / 1.15
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth',
        })
      }
    }
  }
  useEffect(() => {
    const hash = location.hash
    moveToCenter(hash.substring(1))
  }, [location])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="pt-10 lg:pt-12 blade-bottom-padding-lg min-h-[300px] bg-blueGreen">
        <div className=" text-center px-4 mt-6 md:mt-8 lg:mt-0 ">
          <div className="blade-top-padding blade-top-margin-sm pb-4">
            <div className="font-medium text-2xl  text-white   mxlg:text-3xl 2xl:text-4xl leading-tight">
              Privacy Policy
            </div>
          </div>
        </div>
      </section>
      <div className="markdown-wrapper grid lg:grid-cols-8 grid-cols-1 md:w-11/12 sm:px-5  px-3 w-container blade-top-padding-lg blade-bottom-padding-lg blade-bottom-margin-lg">
        <div className="col-span-2">
          <div className="md:hidden block pb-5 ">
            <span className="text-xl  md:text-2xl font-medium">
              Table of contents
            </span>
          </div>

          <div className=" pb-5  grid grid-cols-2 md:flex flex-col gap-3 sticky top-32">
            <span className="text-xl md:block hidden md:text-2xl font-medium">
              Table of contents
            </span>

            {formattedSections.map((elem, index: number) => {
              return (
                <PageElem
                  handleBtnClick={handleBtnClick}
                  key={`${index}`}
                  text={elem.label}
                  active={active}
                  href={elem.value}
                />
              )
            })}
          </div>
        </div>
        <div className="col-span-6  pr-4 lg:w-11/12  md:pl-3  content-wrapper">
          <div className="col-span-8 md:pl-3    content-wrapper">
            <h4 id="overview">Overview</h4>
            <p>
              At Etribe Finance Private Limited ("ProsParity" "we" or "us"), we
              recognize the significance of privacy. We are committed to
              ensuring that your personal information is handled with care and
              transparency. This Privacy Policy ("Privacy Policy") is designed
              to inform you, the user ("you" or "customer" or "user"), of our
              practices regarding the collection, use, storage, and sharing of
              information when you interact with our website www.prosparity.in
              (the "Website") and its associated mobile applications,
              collectively referred to as the "Platform" or “Portal”.
            </p>
            <p>This Privacy Policy has been prepared in compliance with:</p>
            <ol>
              <li>
                Guidelines on Digital Lending issued by the Reserve Bank of
                India (RBI), 2022;
              </li>
              <li>
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011;
              </li>
              <li>
                Information Technology (Intermediary Guidelines and Digital
                Media Ethics Code) Rules, 2021;
              </li>
              <li>
                Other applicable acts, regulations and rules which requires the
                publishing of a privacy policy for handling of or dealing in
                personal information including sensitive personal data or
                information and all applicable laws, regulations, guidelines
                provided by applicable regulatory authorities including but not
                limited to the RBI.
              </li>
            </ol>
            <p>
              This Privacy Policy is incorporated into and at all times is
              subject to and is to be read in conjunction with the Terms of Use
              of the Platform.
            </p>
            <p>
              All terms and conditions regarding usage of the Portal and
              availing Our Services, including the lending, and offered by the
              Lending Partners (defined below) and as set out in the Terms and
              Conditions are incorporated in this Privacy Policy by reference.
              Capitalised terms not defined in this Privacy Policy will have the
              meaning as set out in the Terms and Conditions.
            </p>
            <h4 id="user-acceptance">User acceptance</h4>
            <p>
              By accessing or using the Portal or by availing Our Services, you
              agree to the terms of this Privacy Policy. The collection, use,
              processing, storage, retrieving, disclosure, or transfer of your
              information, including personal information and sensitive personal
              data or information (collectively, “Information”) will be in
              accordance with this Privacy Policy and as required or permitted
              under applicable laws, including but not limited to the
              Information Technology Act, 2000 and the rules framed thereunder,
              as may be amended from time to time (“IT Laws”) and the
              regulations, directions, circulars, guidelines or other mandates
              issued by the Reserve Bank of India (“RBI”) or the National
              Payments Corporation of India and as applicable to the Services
              (collectively, “Applicable Laws”).
            </p>
            <p>
              Any Information, which is the subject matter of this Privacy
              Policy, provided by you or otherwise collected by Us is collected
              and retained by ProsParity (i.e., Etribe Finance Private Limited)
              that has the registered office at Flat No. 904, Keystone Solista,
              Plot No. 6, Thane, Navi Mumbai, Maharashtra - 400706
            </p>
            <p>
              Please read this Privacy Policy carefully to make sure you
              understand how any Information you provide to Us will be handled.
              If you use any of Our Services, you will be regarded as having
              read and accepted this Privacy Policy. By accessing or using the
              Portal, you expressly consent to Our collection, processing,
              storage, transfer, use, disclosure and handling of your
              Information in accordance with this Privacy Policy. If you do not
              agree with the practices described in this Privacy Policy, please
              do not provide Us with your Information, or use, access or
              interact with the Portal and/or avail Our Services.
            </p>
            <p>You hereby represent to ProsParity that:</p>
            <p>
              1.The Information you provide to ProsParity from time to time, is
              and shall be authentic, correct, current and updated and you have
              all the rights, permissions and consents as may be required to
              provide such Information to ProsParity. 2.Your providing the
              Information as well as ProsParity’s consequent storage,
              collection, usage, transfer, access or processing of the same
              shall not be in violation of any agreement, laws, charter
              documents, judgments, orders and decrees.
            </p>
            <p>
              If you disclose to Us any Information relating to other people,
              you represent that you have the authority to do so and to permit
              Us to use such Information in accordance with this Privacy Policy.
            </p>
            <p>
              You must ensure that the Information you provide Us remains
              accurate and up-to-date at all times.
            </p>
            <p>
              Your Information will primarily be stored in electronic form
              however certain data can also be stored in physical form. We may
              enter into agreements with third parties to store or process your
              Information or data. These third parties may have their own
              security standards to safeguard your Information or data and We
              will, on reasonable basis, require such third parties to adopt
              reasonable security standards to safeguard your Information.
            </p>
            <h4 id="collected-info">Information We collect</h4>
            <p>
              ProsParity uses the Information collected from you or about you to
              enable you to receive Services on the Portal. You consent for Us
              to collect the Information in accordance with and for the purposes
              set-out in this Privacy Policy. If you choose not to provide Us
              any of your Information, you may not be able to access the Portal
              or take benefit of some or all of Our Services. ProsParity may
              collect the following Information and you hereby explicitly
              consent to the following:
            </p>
            <h4 id="acceptance-of-terms">acceptance of terms and conditions</h4>
            <ol>
              <li>
                Account Information: When you set up your account on the Portal,
                We collect your Information, such as your first and last name,
                referral code used (if any), address details, photo, email
                addresses, and telephone numbers.
              </li>
              <li>
                Identity: For certain Services, We may collect identity and Know
                Your Customer (“KYC”) related Information comply with the
                customer identification procedures and customer due diligence
                requirements and share the same with the relevant regulated
                entity, in accordance with Applicable Laws.
              </li>
              <li>
                Device: We may collect Information related to the electronic
                device you use to access the Portal, such as your devices’
                internet protocol (IP) address, browser type, operating system,
                software, device type, device ID, device international mobile
                equipment identity (IMEI) and date and time at which you visit
                the Portal or avail the Services. This helps Us learn about and
                verify your identity as well as detect/ prevent fraud and ensure
                that the SIM card in your phone and your registered phone number
                on the Portal match.
              </li>
              <li>
                Usage of the Portal: We may collect Information that you may
                electronically submit when you post on message boards, or
                information contained in searches, reviews, ratings or comments
                that you submit or Information about you from other persons or
                sources, or the details of your visits of the Portal or usage
                behaviour on the Portal. Such Information may be used by Us to
                administer the Portal and compute general statistics regarding
                the use of the Portal. We may also use this Information to share
                important or relevant updates and information through email
                and/or SMS, and also prevent communication that might not
                interest you.
              </li>
              <li>
                SMS: We may need access to the SMS functionality in your device
                for the purposes of activation of certain Services on your
                device. You may have restricted access to the Portal or the
                Services available through the Portal, if you disable, withdraw
                or do not provide this access.
              </li>
              <li>
                Camera: We may require access to your device’s camera for a
                seamless experience, for clicking your selfie, or to upload
                photos for profile updation and as may be required for KYC
                purposes, or for uploading any other necessary documents on the
                Portal.
              </li>
              <li>
                Location: We may collect and monitor your location to verify
                your current address, offer you customized promotions, ensure
                and check serviceability of Services and to prevent any
                fraudulent activity. We collect the location data from you in
                two ways: (i) when you add your pin code on the Portal; or (ii)
                when you enable such access from your mobile device. We collect
                this data only when Our Portal is being used. You may have
                restricted access to the Portal or the Services available
                through the Portal, if you disable, withdraw or do not provide
                this access.
              </li>
              <li>
                Contacts: We may need access to your contacts Information to
                enable you to transact using Our Services.
              </li>
              <li>
                Storage: We may require permission so that your documents can be
                securely downloaded and saved on your phone, and so you can
                upload any required documents as part of using the Services.
                This helps in providing a smooth and seamless experience while
                using the Portal.
              </li>
              <li>
                Feedback Data and Other Data: We may access and save Information
                in the following instances:
                <ol type="a" className="pt-2 !pb-2">
                  <li>
                    When you contact Us or We contact you, We may record
                    Information provided by you during such communications or
                    record calls for quality and training purposes;
                  </li>
                  <li>
                    When you participate in Our referral programs or use any
                    discount codes offered on the Portal and input such data;
                  </li>
                  <li>
                    When you provide any feedback or comments to Us on the
                    Portal or any other platform.
                  </li>
                </ol>
              </li>
              <li>
                Third Party Information: We may also work closely with
                Affiliates (defined below), third party business partners,
                technical sub-contractors, analytics providers, search
                information providers, etc. and may lawfully receive Information
                about you from such sources. Such Information may be combined
                with Information collected on the Portal and such other
                Information as provided in this Policy.
              </li>
              <li>
                Other Information: We may also collect your Information via
                other sources, such as delivery address or contact Information
                from Our Affiliates and partners, Information from Our payment
                service providers, public records, publicly available sources or
                internet sites, vendors, data suppliers and service providers,
                commercially available marketing lists or registries, telephone
                directories, social network, news outlets and other related
                media. Third party applications – We may in our capacity as a
                digital lending application, periodically collect metadata
                information of apps installed on your mobile device and share
                this information with our Lending Partners and other business
                partners for the purpose of enabling financial services. The
                Lending Partners are the entities that are regulated by Reserve
                Bank of India (“RBI”) to enable financial services in India.
              </li>
            </ol>

            <h4 id="use-of-info">Use of your Information</h4>
            <ol>
              <li>To enable you to access the Portal;</li>
              <li>
                To avail the Services We offer to you, including any associated
                services;
              </li>
              <li>
                To facilitate payments for the transactions you make using the
                Services, including appropriate authentication in relation to
                your transaction;
              </li>
              <li>
                To create, maintain or update your account and verify your
                identity;
              </li>
              <li>
                To validate, process and share your Information, nominee
                details, and other legally mandated Information with regulated
                entities, financial institutions, or service providers engaged
                by Us to facilitate the Services;
              </li>
              <li>
                To facilitate or confirm payments made by you in relation to the
                Services;
              </li>
              <li>
                To enhance your user experience in relation to the Portal or the
                Services, including customisation of the Portal or the Services;
              </li>
              <li>
                To conduct audits, market research, project planning,
                troubleshooting;
              </li>
              <li>
                To identify and/or detect security breaches or attacks, errors,
                fraud, money laundering, abuse and other criminal activities,
                and investigating and taking appropriate remedial action;
              </li>
              <li>
                To provide relevant offers or rewards to you, based on your
                consumption patterns;
              </li>
              <li>
                To enforce Our Terms and Conditions or this Privacy Policy and
                resolve any disputes;
              </li>
              <li>
                To provide functionality, analyse performance, fix errors, bugs,
                and improve the usability and effectiveness of the Portal;
              </li>
              <li>
                To deliver any administrative notices, alerts, advice,
                notifications and communication relevant to your use of the
                facilities on the Portal, through social media (including
                WhatsApp), SMS and other media;
              </li>
              <li>
                To recommend products or promotional offers to you that might be
                of interest to you, identify your preferences. We may also use
                your preferences or details regarding your usage of the Portal
                for marketing and other promotional activities;
              </li>
              <li>
                To comply with Applicable Laws or requests received from
                regulators, government, law enforcement or judicial authorities
                under Applicable Laws or Our contract with a third party;
              </li>
              <li>
                To disclose to business partners, Affiliates, Our and their
                employees, agents and representatives on a need-to-know basis to
                facilitate provision of Services;
              </li>
              <li>
                To carry out Our obligations and enforcing rights arising from
                any contracts between Us;
              </li>
              <li>
                To help improve quality and design of Our Portal, including to
                create new features, promotions, functionality and services;
              </li>
              <li>To help improve the Services; or</li>
              <li>
                To fulfil any other purpose for which you provide Us the
                Information and/or for any other purpose with your consent.
              </li>
            </ol>

            <h4 id="sharing-of-info">Sharing of your information</h4>
            <p>We may share your information for the following purposes: -</p>
            <ol>
              <li>
                With financial institutions (such as banks and Non-Banking
                Financial Companies), credit information companies, NPCI, RBI or
                other regulatory agencies, to facilitate provision of Services,
                or as required under Applicable Laws;
              </li>
              <li>
                With vendors or service providers, business partners,
                Affiliates, to provide you with the Services, facilitate account
                creation, provide technical or customer support, synchronization
                of your contacts with the Portal or other software applications,
                send you communications via emails, messages or tele-call to
                inform you about the Services, or products, offers or services
                that may be of interest to you, push notifications to your
                electronic device on Our behalf, and collect, process and settle
                payments. We may also use other third parties for activities
                such as conducting surveys for Us, and may share your
                information with such third parties.
              </li>
              <li>
                With Our holding companies, subsidiaries, affiliates and other
                body corporates in Our group (collectively, "Affiliates"), which
                operate under common ownership or control;
              </li>
              <li>
                With a buyer or other successor in the event of a merger,
                restructuring, reorganization, dissolution or other sale or
                transfer of some or all the assets, whether as a going concern
                or as part of bankruptcy, liquidation or similar proceeding, in
                which your Information may be amongst the assets transferred;
              </li>
              <li>
                With law enforcement agencies, courts, regulators and/or other
                governmental organizations which have jurisdiction, to ensure
                compliance with orders or government directives;
              </li>
              <li>
                To enforce or apply the Terms and Conditions, this Privacy
                Policy and other agreements entered with you; or
              </li>
              <li>
                In any other circumstances where We have your consent for any
                other purpose disclosed by Us when you provide the Information.
              </li>
            </ol>
            <h4 id="third-party-policies">Third Party Policies</h4>
            <p>
              We may work with different third parties in connection with the
              Portal or for providing the Services. Please be aware that any
              information provided to any third-party or when you click through
              or are routed to third-party links while using the Portal, Our
              Privacy Policy no longer will apply and that We are not
              responsible for the privacy practices of these third parties.
            </p>
            <p>
              In general, the third-party service providers used by Us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services or activities they provide
              Us. In such cases, We share the Information securely and use
              commercially reasonable efforts to ensure that all recipients
              comply with confidentiality, fidelity and secrecy obligations and
              sign covenants in this regard. We will require such third party to
              provide same or equal protection to the Information as provided in
              this Privacy Policy.
            </p>
            <p>
              However, certain third-party service providers (such as banks,
              financial institutions, payment aggregators or credit information
              companies), have their own privacy policies in respect to the
              information We are required to provide to them. For these
              third-party service providers, We recommend that you read their
              privacy policies to understand the manner in which your
              Information will be handled by them. In particular, remember that
              certain third-party service providers may be located in or have
              facilities that are located in a different jurisdiction. So, if
              you elect to proceed with a transaction that involves the services
              of a third-party service provider, then your information may
              become subject to the laws of the jurisdiction(s) in which such
              service provider is or its facilities are located. Once you leave
              the Portal or are redirected to a third-party website or
              application, you are no longer governed by this Privacy Policy or
              the Portal's Terms and Conditions and in such circumstances the
              privacy policy of such other website will apply. We will not be
              liable for any acts or omissions of the third-party service
              provider.
            </p>
            <h4 id="security-practices">Our security practices and policies</h4>
            <p>
              1.To secure the Information, We implement reasonable security
              practices and procedures as mandated under the IT Laws. We have
              comprehensive documented information security programme and
              information security policies that contain managerial, technical,
              operational and physical security control measures that are
              commensurate with respect to the Information being collected and
              the nature of Our business. 2.While We try Our best to ensure your
              Information is safe and secure, because of the inherent
              vulnerabilities of the internet, We cannot warrant complete
              security of all Information that you share with Us. We protect the
              security of your Information during transmission by using servers
              that have Firewall and Secure Sockets Layer (SSL) certificate
              installed, which encrypts information you input and prevents
              unauthorized access of such information to or from a private
              network in addition to maintaining security of your information as
              per the International Standard IS/ISO/IEC 27001 on "Information
              Technology Security Techniques Information Security Management
              System-Requirements".
            </p>
            <h4 id="info-storage">Information storage, retention, and usage</h4>
            <p>
              All customer data resides within India. Secure storage protocols
              and robust data encryption mechanisms are implemented to ensure
              data security. We conduct regular audits to verify compliance with
              RBI regulations and to update storage and usage policies
              accordingly.
            </p>
            <p>
              User documents like agreements, KYC details, Aadhaar details, user
              communications, transaction logs, credit scores are retained for
              necessary business and regulatory purposes. Retention periods are
              strictly adhered to and data is deleted in compliance with
              regulatory requirements.
            </p>
            <h4 id="restriction-of-use">Restrictions on the use of data</h4>
            <p>
              Customer data is strictly used for purposes outlined in this
              Privacy Policy and in alignment with regulatory guidelines. Access
              to sensitive customer data is restricted to authorised personnel
              only, ensuring confidentiality and privacy.
            </p>
            <h4 id="standard-of-handling">
              Standards for handling security breach
            </h4>
            <p>
              In case of any security breach, ProsParity follows the standard
              security incident management process in alignment with ISO 27001,
              PCI DSS and reports the details of the breach/incident to CERT-In
              and relevant regulators within the stipulated time period.
            </p>

            <h4 id="withdrawal-of-consent">
              Withdrawal of Consent & Rectification
            </h4>
            <p>
              You can access and review the Information shared by you, after
              fulfilling the pending contractual obligations, by getting in
              touch with Us. You can also withdraw or revoke consent given to Us
              to process any Information given by you to Us, by writing to Us at
              hello@prosarity.in. Also, you can request deletion of your account
              on the Portal.
            </p>
            <p>
              We shall not retain your Information if it is no longer required
              by Us and there is no legal requirement to retain the same. Do
              note that multiple legal bases may exist in parallel, and We may
              still have to retain certain Information at any time.
            </p>
            <p>
              In the event any Information provided by you is inaccurate,
              incomplete or outdated then you should provide Us with the
              accurate, complete and up to date Information and have Us rectify
              such Information at Our end immediately. We urge you to ensure
              that you always provide Us with accurate and correct Information
              to ensure your use of Our Services is uninterrupted.
            </p>

            <h4 id="child-info">Information of Children</h4>
            <p>You must be at least 18 years of age to access the Portal.</p>
            <h4 id="third-party">
              advertisers/ third party links to the platform
            </h4>

            <h4 id="modifications">Modifications</h4>
            <p>
              We reserve the right to change, modify, insert, or delete any
              provision of this Privacy Policy, from time to time, in Our sole
              discretion, without any prior notice to you.
            </p>
            <p>
              We encourage you to periodically review this Privacy Policy for
              the latest information on Our privacy practices. Your use of the
              Portal or availing the Services after an updated Privacy Policy
              becomes effective will indicate your acceptance of the updated
              Privacy Policy.
            </p>

            <h4 id="cookies">cookies</h4>
            <p>
              When you visit the Portal, one or more cookies will be sent to the
              device being used by you to access the Portal. The cookies are
              either used to improve the quality of the Portal or for storing
              your preferences as a user, improving search results and tracking
              user trends. You have the option of disabling cookies via your
              browser preferences on your device. However, if you disable
              cookies on your browser, some parts of the Portal may not function
              effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
