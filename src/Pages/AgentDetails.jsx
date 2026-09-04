import { useNavigate, useParams } from "react-router";
import { agents } from "./Agents";
const AgentDetails = () => {
  const { agentId } = useParams();

  const agentInfo = agents.find((agent) => agent.id == agentId);

  const navigate = useNavigate();
  const back = () => {
    navigate("/agents");
  };
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-orange-50 to-rose-100 py-4 sm:py-6 lg:py-8">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          type="button"
          onClick={back}
          className="inline-flex max-w-full items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-gray-700 transition hover:bg-white/70 hover:text-orange-500 sm:text-base"
        >
          <span>🔙</span>
          <span>Go back</span>
        </button>

        {/* Main Content */}
        <div className="mt-5 grid w-full min-w-0 grid-cols-1 gap-6 sm:mt-7 md:gap-8 lg:mt-8 lg:grid-cols-2 lg:gap-10 ">
          {/*  Image */}
          <div className="min-w-0 w-full max-w-full overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              src={agentInfo.image}
              alt={agentInfo.name}
              className="
            block
            h-64
            w-full
            max-w-full
            object-cover
            transition
            duration-500
            hover:scale-105
            sm:h-80
            md:h-[400px]
            lg:h-[500px]
          "
            />
          </div>

          <div className="min-w-0 w-full max-w-full flex-col justify-center py-2 sm:py-4 lg:flex lg:py-6">
            {/* role */}
            <span className="mb-3 block w-fit max-w-full truncate rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-500 sm:px-4 sm:text-sm">
              Role: {agentInfo.role}
            </span>

            {/* Title */}
            <h1
              className="
            min-w-0
            max-w-full
            break-words
            text-2xl
            font-bold
            leading-tight
            text-gray-900
            sm:text-3xl
            md:text-4xl
            lg:text-4xl
          "
            >
              {agentInfo.name}
            </h1>

            {/* Location */}
            <div className="mt-3 flex w-full min-w-0 max-w-full items-start gap-2 text-gray-500 sm:mt-4">
              <span className="shrink-0 text-base sm:text-lg">📍</span>

              <span className="min-w-0 max-w-full break-words text-sm sm:text-base lg:text-lg">
                {agentInfo.location}
              </span>
            </div>

            {/* specialization */}
            <div className="mt-5 flex w-full min-w-0 max-w-full flex-wrap items-end gap-2 sm:mt-6">
              <h2
                className="
              max-w-full
              break-words
              text-2xl
              font-bold
              text-orange-500
              sm:text-3xl
              md:text-4xl
            "
              >
                Specialization: {agentInfo.specialization}
              </h2>
            </div>

            <div className="mt-6 grid w-full min-w-0 grid-cols-2 gap-3 sm:mt-7 sm:gap-4">
              <div className="min-w-0 w-full rounded-xl border border-orange-100 bg-orange-50 p-3 sm:p-5">
                <span className="text-2xl sm:text-3xl">🧠</span>

                <p className="mt-2 truncate text-xs text-gray-500 sm:text-sm">
                  experience
                </p>

                <p className="truncate text-lg font-bold text-gray-800 sm:text-xl">
                  {agentInfo.experience}
                </p>
              </div>

              {/* Bathrooms */}
              <div className="min-w-0 w-full rounded-xl border border-orange-100 bg-orange-50 p-3 sm:p-5">
                <span className="text-2xl sm:text-3xl">🏚️</span>

                <p className="mt-2 truncate text-xs text-gray-500 sm:text-sm">
                  properties
                </p>

                <p className="truncate text-lg font-bold text-gray-800 sm:text-xl">
                  {agentInfo.properties}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  DESCRIPTION */}
        <div className="mt-6 mb-6 w-full min-w-0 max-w-full rounded-2xl bg-white p-5 shadow-md sm:mt-8 sm:mb-8 sm:p-6 md:p-8 lg:mt-10 lg:mb-10">
          <h2 className="mb-3 max-w-full break-words text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl md:text-3xl">
            Agent Description
          </h2>

          <p className="w-full min-w-0 max-w-full break-words text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            {agentInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
