--
-- Vars
--

local status = nil

--
-- Threads
--

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(500)
        local ped = PlayerPedId()
        local pid = PlayerId()
        if IsPedInAnyVehicle(ped) then
            SendNUIMessage({showhud = true})
            DisplayRadar(true)
        else
            SendNUIMessage({showhud = false})
            DisplayRadar(false)
        end
        SendNUIMessage({
            health = GetEntityHealth(ped) - 100,
            armor = GetPedArmour(ped),
            stamina = 100 - GetPlayerSprintStaminaRemaining(pid),
            st = status,
        })
    end
end)

--
-- Events
--

RegisterNetEvent('tevi_hud:update')
AddEventHandler('tevi_hud:update', function(Status)
    status = Status
    SendNUIMessage({
        action = "updateStatus",
        st = Status,
    })
end)
