local status = nil
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(100)
        
        SendNUIMessage({
            health = GetEntityHealth(GetPlayerPed(-1)) - 100,
            armor = GetPedArmour(GetPlayerPed(-1)),
            stamina = 100 - GetPlayerSprintStaminaRemaining(PlayerId()),
            st = status,
        })
    end
end)

Citizen.CreateThread(function()
    Citizen.Wait(100)

    while true do
        local sleepThread = 500

        if not IsPedInAnyVehicle(PlayerPedId()) then
            DisplayRadar(false)
            SendNUIMessage({showhud = false})
        elseif IsPedInAnyVehicle(PlayerPedId()) then
            SendNUIMessage({showhud = true})
            DisplayRadar(true)
        end

        Citizen.Wait(sleepThread)
    end
end)

RegisterNetEvent('esx_status:onTick')
AddEventHandler('esx_status:onTick', function(Status)
    status = Status
    SendNUIMessage({
        action = "updateStatus",
        st = Status,
    })
end)

